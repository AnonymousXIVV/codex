<?php
/**
 * Codex Dynamics - CRM Data Provider (PHP / SQLite3)
 * Full data payload: stats, visitors, leads, enquiries, backlinks, blogs, reviews, projects.
 */

require_once __DIR__ . '/db.php';

$pdo = getCrmPdo();

try {
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

    $settingsRows = $pdo->query("SELECT key, value FROM settings")->fetchAll();
    $settings = [];
    foreach ($settingsRows as $row) {
        $settings[$row['key']] = $row['value'];
    }

    // Format blog tags
    foreach ($blogs as &$b) {
        if (!empty($b['tags']) && is_string($b['tags'])) {
            $decoded = json_decode($b['tags'], true);
            if (is_array($decoded)) {
                $b['tags'] = $decoded;
            }
        }
    }

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
        'settings' => $settings,
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
}
