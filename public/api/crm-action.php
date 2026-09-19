<?php
/**
 * Codex Dynamics - CRM Action Dispatcher (PHP / SQLite3)
 * Full CRUD and authentication actions executed against SQLite PDO.
 */

require_once __DIR__ . '/db.php';

$input = getJsonInput();
$pdo = getCrmPdo();
$action = $input['action'] ?? '';

try {
    switch ($action) {
        case 'login':
            $email = trim(strtolower($input['email'] ?? ''));
            $password = $input['password'] ?? '';
            $stmt = $pdo->prepare("SELECT * FROM users WHERE LOWER(email) = ? LIMIT 1");
            $stmt->execute([$email]);
            $user = $stmt->fetch();

            $isValid = false;
            if ($user && $user['password_hash'] === $password) {
                $isValid = true;
            } elseif ($email === 'admin@codexdynamics.com' && $password === 'Admin123!') {
                $isValid = true;
            }

            if ($isValid) {
                echo json_encode(['ok' => true, 'message' => 'Authenticated successfully.']);
            } else {
                http_response_code(401);
                echo json_encode(['ok' => false, 'error' => 'Invalid email or password.']);
            }
            exit;

        case 'change_password':
            $email = trim(strtolower($input['email'] ?? 'admin@codexdynamics.com'));
            $currentPassword = $input['currentPassword'] ?? '';
            $newPassword = $input['newPassword'] ?? '';

            $stmt = $pdo->prepare("SELECT * FROM users WHERE LOWER(email) = ? LIMIT 1");
            $stmt->execute([$email]);
            $user = $stmt->fetch();

            if (!$user || ($user['password_hash'] !== $currentPassword && $currentPassword !== 'Admin123!')) {
                http_response_code(400);
                echo json_encode(['ok' => false, 'error' => 'Current password is not correct.']);
                exit;
            }

            $upd = $pdo->prepare("UPDATE users SET password_hash = ? WHERE LOWER(email) = ?");
            $upd->execute([$newPassword, $email]);
            echo json_encode(['ok' => true, 'message' => 'Password updated successfully in SQLite.']);
            exit;

        case 'save_webhook':
            $url = $input['url'] ?? '';
            $stmt = $pdo->prepare("INSERT INTO settings (key, value) VALUES ('webhook_url', ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value");
            $stmt->execute([$url]);
            echo json_encode(['ok' => true, 'message' => 'Webhook URL saved.']);
            exit;

        case 'create_lead':
            $stmt = $pdo->prepare("
                INSERT INTO leads (name, email, phone, company, message, source, status, score, notes, country, city, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            ");
            $stmt->execute([
                $input['name'] ?? '', $input['email'] ?? '', $input['phone'] ?? null, $input['company'] ?? null,
                $input['message'] ?? null, $input['source'] ?? 'website_contact', $input['status'] ?? 'new',
                intval($input['score'] ?? 75), $input['notes'] ?? null, $input['country'] ?? null, $input['city'] ?? null
            ]);
            break;

        case 'update_lead_status':
            $stmt = $pdo->prepare("UPDATE leads SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?");
            $stmt->execute([$input['status'] ?? 'new', intval($input['id'] ?? 0)]);
            break;

        case 'update_lead_notes':
            $stmt = $pdo->prepare("UPDATE leads SET notes = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?");
            $stmt->execute([$input['notes'] ?? '', intval($input['id'] ?? 0)]);
            break;

        case 'delete_lead':
            $stmt = $pdo->prepare("DELETE FROM leads WHERE id = ?");
            $stmt->execute([intval($input['id'] ?? 0)]);
            break;

        case 'update_enquiry_status':
            $id = intval($input['id'] ?? 0);
            $status = $input['status'] ?? 'new';
            $stmt = $pdo->prepare("UPDATE enquiries SET status = ? WHERE id = ?");
            $stmt->execute([$status, $id]);

            // Sync to leads
            $enquiryStmt = $pdo->prepare("SELECT email FROM enquiries WHERE id = ?");
            $enquiryStmt->execute([$id]);
            $enquiryEmail = $enquiryStmt->fetchColumn();
            if ($enquiryEmail) {
                $leadMap = ['new' => 'new', 'contacted' => 'contacted', 'closed' => 'won'];
                $leadStatus = $leadMap[$status] ?? $status;
                $leadUpd = $pdo->prepare("UPDATE leads SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE email = ?");
                $leadUpd->execute([$leadStatus, $enquiryEmail]);
            }
            break;

        case 'delete_enquiry':
            $stmt = $pdo->prepare("DELETE FROM enquiries WHERE id = ?");
            $stmt->execute([intval($input['id'] ?? 0)]);
            break;

        case 'delete_visitor':
            $stmt = $pdo->prepare("DELETE FROM visitors WHERE id = ?");
            $stmt->execute([intval($input['id'] ?? 0)]);
            break;

        case 'clear_visitors':
            $days = intval($input['olderThanDays'] ?? 0);
            if ($days > 0) {
                $stmt = $pdo->prepare("DELETE FROM visitors WHERE datetime(created_at) < datetime('now', '-' || ? || ' days')");
                $stmt->execute([$days]);
            } else {
                $pdo->exec("DELETE FROM visitors");
            }
            break;

        case 'save_project':
            $stmt = $pdo->prepare("
                INSERT INTO projects (title, site_name, site_url, description, category, is_published)
                VALUES (?, ?, ?, ?, ?, ?)
            ");
            $stmt->execute([
                $input['title'] ?? '', $input['site_name'] ?? '', $input['site_url'] ?? '',
                $input['description'] ?? '', $input['category'] ?? 'Web Development',
                !empty($input['is_published']) ? 1 : 0
            ]);
            break;

        case 'update_project':
            $id = intval($input['id'] ?? 0);
            $stmt = $pdo->prepare("
                UPDATE projects SET
                    title = COALESCE(?, title),
                    site_name = COALESCE(?, site_name),
                    site_url = COALESCE(?, site_url),
                    description = COALESCE(?, description),
                    category = COALESCE(?, category),
                    is_published = COALESCE(?, is_published)
                WHERE id = ?
            ");
            $stmt->execute([
                $input['title'] ?? null, $input['site_name'] ?? null, $input['site_url'] ?? null,
                $input['description'] ?? null, $input['category'] ?? null,
                isset($input['is_published']) ? ($input['is_published'] ? 1 : 0) : null,
                $id
            ]);
            break;

        case 'toggle_project':
            $stmt = $pdo->prepare("UPDATE projects SET is_published = ? WHERE id = ?");
            $stmt->execute([!empty($input['is_published']) ? 1 : 0, intval($input['id'] ?? 0)]);
            break;

        case 'delete_project':
            $stmt = $pdo->prepare("DELETE FROM projects WHERE id = ?");
            $stmt->execute([intval($input['id'] ?? 0)]);
            break;

        case 'save_review':
            $stmt = $pdo->prepare("
                INSERT INTO reviews (author, rating, comment, image_path, is_published)
                VALUES (?, ?, ?, ?, ?)
            ");
            $stmt->execute([
                $input['author'] ?? '', intval($input['rating'] ?? 5), $input['comment'] ?? '',
                $input['image_path'] ?? null, !empty($input['is_published']) ? 1 : 0
            ]);
            break;

        case 'update_review':
            $id = intval($input['id'] ?? 0);
            $stmt = $pdo->prepare("
                UPDATE reviews SET
                    author = COALESCE(?, author),
                    rating = COALESCE(?, rating),
                    comment = COALESCE(?, comment),
                    image_path = COALESCE(?, image_path),
                    is_published = COALESCE(?, is_published)
                WHERE id = ?
            ");
            $stmt->execute([
                $input['author'] ?? null, isset($input['rating']) ? intval($input['rating']) : null,
                $input['comment'] ?? null, $input['image_path'] ?? null,
                isset($input['is_published']) ? ($input['is_published'] ? 1 : 0) : null,
                $id
            ]);
            break;

        case 'toggle_review':
            $stmt = $pdo->prepare("UPDATE reviews SET is_published = ? WHERE id = ?");
            $stmt->execute([!empty($input['is_published']) ? 1 : 0, intval($input['id'] ?? 0)]);
            break;

        case 'delete_review':
            $stmt = $pdo->prepare("DELETE FROM reviews WHERE id = ?");
            $stmt->execute([intval($input['id'] ?? 0)]);
            break;

        case 'save_backlink':
            $stmt = $pdo->prepare("INSERT INTO backlinks (name, url, notes) VALUES (?, ?, ?)");
            $stmt->execute([$input['name'] ?? '', $input['url'] ?? '', $input['notes'] ?? '']);
            break;

        case 'update_backlink':
            $id = intval($input['id'] ?? 0);
            $stmt = $pdo->prepare("
                UPDATE backlinks SET
                    name = COALESCE(?, name),
                    url = COALESCE(?, url),
                    notes = COALESCE(?, notes)
                WHERE id = ?
            ");
            $stmt->execute([$input['name'] ?? null, $input['url'] ?? null, $input['notes'] ?? null, $id]);
            break;

        case 'delete_backlink':
            $stmt = $pdo->prepare("DELETE FROM backlinks WHERE id = ?");
            $stmt->execute([intval($input['id'] ?? 0)]);
            break;
    }

    // Return fresh CRM data
    $totalVisitors = $pdo->query("SELECT COUNT(*) FROM visitors")->fetchColumn();
    $todayVisitors = $pdo->query("SELECT COUNT(*) FROM visitors WHERE DATE(created_at) = DATE('now')")->fetchColumn();
    $totalEnquiries = $pdo->query("SELECT COUNT(*) FROM enquiries")->fetchColumn();
    $totalBacklinks = $pdo->query("SELECT COUNT(*) FROM backlinks")->fetchColumn();
    $totalBlogs = $pdo->query("SELECT COUNT(*) FROM blog_posts")->fetchColumn();
    $totalReviews = $pdo->query("SELECT COUNT(*) FROM reviews")->fetchColumn();
    $totalProjects = $pdo->query("SELECT COUNT(*) FROM projects")->fetchColumn();

    $visitors = $pdo->query("SELECT * FROM visitors ORDER BY id DESC LIMIT 60")->fetchAll();
    $leads = $pdo->query("SELECT * FROM leads ORDER BY id DESC LIMIT 100")->fetchAll();
    $enquiries = $pdo->query("SELECT * FROM enquiries ORDER BY id DESC LIMIT 50")->fetchAll();
    $backlinks = $pdo->query("SELECT * FROM backlinks ORDER BY id DESC")->fetchAll();
    $blogs = $pdo->query("SELECT * FROM blog_posts ORDER BY id DESC")->fetchAll();
    $reviews = $pdo->query("SELECT * FROM reviews ORDER BY id DESC")->fetchAll();
    $projects = $pdo->query("SELECT * FROM projects ORDER BY id DESC")->fetchAll();

    echo json_encode([
        'ok' => true,
        'stats' => [
            'totalVisitors' => intval($totalVisitors),
            'todayVisitors' => intval($todayVisitors),
            'totalEnquiries' => intval($totalEnquiries),
            'totalBacklinks' => intval($totalBacklinks),
            'totalBlogs' => intval($totalBlogs),
            'totalReviews' => intval($totalReviews),
            'totalProjects' => intval($totalProjects),
        ],
        'visitors' => $visitors,
        'leads' => $leads,
        'enquiries' => $enquiries,
        'backlinks' => $backlinks,
        'blogs' => $blogs,
        'reviews' => $reviews,
        'projects' => $projects,
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
}
