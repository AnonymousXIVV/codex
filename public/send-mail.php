<?php
/**
 * Codex Dynamics - Inbound Contact Form Mailer & Lead Capture (PHP / SQLite3)
 * Handles FormData/POST submissions, persists to SQLite DB, and sends notification email.
 */

require_once __DIR__ . '/api/db.php';

$input = getJsonInput();
$pdo = getCrmPdo();

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$company = trim($input['company'] ?? '');
$message = trim($input['message'] ?? '');

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Name and Email fields are required.']);
    exit;
}

try {
    // 1. Insert into enquiries
    $stmt = $pdo->prepare("
        INSERT INTO enquiries (name, email, phone, company, message, source, status)
        VALUES (?, ?, ?, ?, ?, 'contact_form', 'new')
    ");
    $stmt->execute([$name, $email, $phone, $company, $message]);
    $enquiryId = $pdo->lastInsertId();

    // 2. Insert into leads pipeline
    $leadStmt = $pdo->prepare("
        INSERT INTO leads (name, email, phone, company, message, source, status, score, notes, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, 'website_contact', 'new', 85, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    ");
    $leadStmt->execute([
        $name, $email, $phone, $company, $message,
        "Form submission via /send-mail.php. Message: " . mb_substr($message, 0, 150)
    ]);

    // 3. Attempt PHP mail() if server supports it
    $to = "inquiries@codexdynamics.com";
    $subject = "New Client Project Inquiry: " . $name;
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\n\nMessage:\n$message\n\nSubmitted on " . date('Y-m-d H:i:s');
    $headers = "From: webmaster@" . ($_SERVER['SERVER_NAME'] ?? 'codexdynamics.com') . "\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    @mail($to, $subject, $body, $headers);

    echo json_encode([
        'ok' => true,
        'message' => 'Message received and enquiry logged.',
        'enquiry_id' => $enquiryId
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
}
