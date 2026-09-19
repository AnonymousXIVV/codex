<?php
/**
 * Codex Dynamics CRM - Native PHP SQLite3 / PDO Database Connector
 * Production-ready for Hostinger Shared Hosting, cPanel, Apache & Nginx.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

function getCrmPdo() {
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }

    // Determine database path
    $possiblePaths = [
        dirname(__DIR__, 2) . '/.data/database.sqlite',
        dirname(__DIR__, 1) . '/database.sqlite',
        dirname(__DIR__, 2) . '/database.sqlite',
        __DIR__ . '/database.sqlite'
    ];

    $dbPath = null;
    foreach ($possiblePaths as $p) {
        if (file_exists($p)) {
            $dbPath = $p;
            break;
        }
    }

    if (!$dbPath) {
        // Preferred fallback location
        $targetDir = dirname(__DIR__, 2) . '/.data';
        if (!is_dir($targetDir)) {
            @mkdir($targetDir, 0755, true);
        }
        if (is_dir($targetDir) && is_writable($targetDir)) {
            $dbPath = $targetDir . '/database.sqlite';
        } else {
            $dbPath = dirname(__DIR__, 1) . '/database.sqlite';
        }
    }

    try {
        $pdo = new PDO('sqlite:' . $dbPath);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $pdo->exec('PRAGMA journal_mode = WAL;');
        $pdo->exec('PRAGMA synchronous = NORMAL;');

        // Auto-bootstrap schema if freshly created
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                name TEXT DEFAULT 'Admin',
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS visitors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                session_id TEXT,
                ip_address TEXT,
                country TEXT,
                country_code TEXT DEFAULT 'US',
                flag TEXT,
                city TEXT DEFAULT 'San Francisco',
                region TEXT DEFAULT 'California',
                postal_code TEXT DEFAULT '94105',
                street TEXT DEFAULT '101 Market St, Financial District',
                browser TEXT,
                device TEXT,
                user_agent TEXT,
                page_url TEXT,
                referrer TEXT DEFAULT 'Direct',
                duration_seconds INTEGER DEFAULT 120,
                visit_count INTEGER DEFAULT 1,
                is_returning INTEGER DEFAULT 0,
                pages_viewed TEXT,
                cookies_data TEXT,
                email TEXT,
                name TEXT,
                phone TEXT,
                is_lead INTEGER DEFAULT 0,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS enquiries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                email TEXT,
                phone TEXT,
                company TEXT,
                message TEXT,
                source TEXT DEFAULT 'website',
                status TEXT DEFAULT 'new',
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                visitor_id INTEGER,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT,
                company TEXT,
                message TEXT,
                source TEXT DEFAULT 'website_contact',
                status TEXT DEFAULT 'new',
                score INTEGER DEFAULT 50,
                notes TEXT,
                ip_address TEXT,
                country TEXT,
                flag TEXT,
                city TEXT,
                postal_code TEXT,
                street TEXT,
                pages_viewed_count INTEGER DEFAULT 1,
                duration_seconds INTEGER DEFAULT 0,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS backlinks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                url TEXT NOT NULL,
                notes TEXT,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS blog_posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                slug TEXT NOT NULL UNIQUE,
                excerpt TEXT,
                content TEXT,
                meta_title TEXT,
                meta_description TEXT,
                status TEXT DEFAULT 'draft',
                cover_image TEXT,
                author TEXT DEFAULT 'Codex Dynamics Research',
                category TEXT DEFAULT 'Engineering',
                tags TEXT DEFAULT '[]',
                focus_keyword TEXT,
                views INTEGER DEFAULT 0,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                author TEXT NOT NULL,
                rating INTEGER DEFAULT 5,
                comment TEXT NOT NULL,
                image_path TEXT,
                is_published INTEGER DEFAULT 1,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS projects (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                site_name TEXT,
                site_url TEXT,
                description TEXT,
                category TEXT,
                is_published INTEGER DEFAULT 1,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
            CREATE TABLE IF NOT EXISTS settings (
                key TEXT PRIMARY KEY,
                value TEXT
            );
        ");

        return $pdo;
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => 'Database connection failed: ' . $e->getMessage()]);
        exit;
    }
}

function getJsonInput() {
    $raw = file_get_contents('php://input');
    if (!empty($raw)) {
        $json = json_decode($raw, true);
        if (json_last_error() === JSON_ERROR_NONE && is_array($json)) {
            return $json;
        }
    }
    return $_POST;
}
