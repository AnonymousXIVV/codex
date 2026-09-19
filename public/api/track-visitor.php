<?php
/**
 * Codex Dynamics - Visitor Tracking Endpoint (PHP / SQLite3)
 * Tracks geolocation, browser, device, duration, pages and cookies.
 */

require_once __DIR__ . '/db.php';

$input = getJsonInput();
$pdo = getCrmPdo();

$sessionId = $input['sessionId'] ?? $input['session_id'] ?? ('sess_' . substr(md5(uniqid()), 0, 10));
$ip = $input['ip'] ?? $input['ip_address'] ?? ($_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1');
if (strpos($ip, ',') !== false) {
    $parts = explode(',', $ip);
    $ip = trim($parts[0]);
}

$country = $input['country'] ?? 'United States';
$countryCode = $input['countryCode'] ?? $input['country_code'] ?? 'US';
$flag = $input['flag'] ?? '🇺🇸';
$city = $input['city'] ?? 'San Francisco';
$region = $input['region'] ?? 'California';
$postalCode = $input['postalCode'] ?? $input['postal_code'] ?? '94105';
$street = $input['street'] ?? '101 Market St, Financial District';
$browser = $input['browser'] ?? 'Chrome';
$device = $input['device'] ?? 'Desktop';
$userAgent = $input['userAgent'] ?? $input['user_agent'] ?? ($_SERVER['HTTP_USER_AGENT'] ?? 'Standard Browser');
$pageUrl = $input['page'] ?? $input['page_url'] ?? '/';
$referrer = $input['referrer'] ?? 'Direct';
$duration = intval($input['duration'] ?? $input['duration_seconds'] ?? 120);
$visits = intval($input['visits'] ?? $input['visit_count'] ?? 1);
$isReturning = intval($input['isReturning'] ?? $input['is_returning'] ?? 0);

$pages = is_array($input['pages'] ?? null) ? json_encode($input['pages']) : ($input['pages_viewed'] ?? '[]');
$cookies = is_array($input['cookies'] ?? null) ? json_encode($input['cookies']) : ($input['cookies_data'] ?? '{}');

try {
    // Check if session exists
    $stmt = $pdo->prepare("SELECT id, visit_count, duration_seconds FROM visitors WHERE session_id = ? LIMIT 1");
    $stmt->execute([$sessionId]);
    $existing = $stmt->fetch();

    if ($existing) {
        $upd = $pdo->prepare("
            UPDATE visitors SET
                duration_seconds = MAX(duration_seconds, ?),
                visit_count = visit_count + 1,
                page_url = ?,
                pages_viewed = ?,
                cookies_data = ?
            WHERE id = ?
        ");
        $upd->execute([$duration, $pageUrl, $pages, $cookies, $existing['id']]);
        $visitorId = $existing['id'];
    } else {
        $ins = $pdo->prepare("
            INSERT INTO visitors (
                session_id, ip_address, country, country_code, flag, city, region,
                postal_code, street, browser, device, user_agent, page_url, referrer,
                duration_seconds, visit_count, is_returning, pages_viewed, cookies_data
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");
        $ins->execute([
            $sessionId, $ip, $country, $countryCode, $flag, $city, $region,
            $postalCode, $street, $browser, $device, $userAgent, $pageUrl, $referrer,
            $duration, $visits, $isReturning, $pages, $cookies
        ]);
        $visitorId = $pdo->lastInsertId();
    }

    echo json_encode([
        'ok' => true,
        'visitor_id' => $visitorId,
        'session' => $sessionId,
        'country' => $country,
        'flag' => $flag
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
}
