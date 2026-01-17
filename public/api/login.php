<?php
/**
 * Admin Login API Endpoint
 * 
 * POST /api/login.php
 * 
 * Request Body:
 * {
 *   "username": "sjbmedia",
 *   "password": "sjbmedia2026"
 * }
 * 
 * Response:
 * {
 *   "success": true,
 *   "user": {
 *     "username": "sjbmedia",
 *     "email": "info@sjbmedia.nl",
 *     "role": "client_admin"
 *   },
 *   "token": "session_token_here"
 * }
 */

require_once 'config.php';

// Set CORS headers
setCorsHeaders();

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendErrorResponse('Method not allowed', 405);
}

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['username']) || !isset($input['password'])) {
        sendErrorResponse('Username and password are required', 400);
    }
    
    $username = trim($input['username']);
    $password = $input['password'];
    
    // Get database connection
    $db = getDbConnection();
    
    // Query user
    $sql = "SELECT 
                au.id,
                au.username,
                au.password_hash,
                au.email,
                au.role,
                au.status,
                c.client_code,
                c.client_name
            FROM admin_users au
            LEFT JOIN clients c ON au.client_id = c.id
            WHERE au.username = :username
            AND au.status = 'active'
            LIMIT 1";
    
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':username', $username);
    $stmt->execute();
    
    $user = $stmt->fetch();
    
    if (!$user) {
        // User not found - use generic error message for security
        sendErrorResponse('Invalid username or password', 401);
    }
    
    // Verify password
    if (!password_verify($password, $user['password_hash'])) {
        sendErrorResponse('Invalid username or password', 401);
    }
    
    // Update last login
    $updateSql = "UPDATE admin_users SET last_login = NOW() WHERE id = :id";
    $updateStmt = $db->prepare($updateSql);
    $updateStmt->bindValue(':id', $user['id']);
    $updateStmt->execute();
    
    // Start session
    session_start();
    $_SESSION['admin_logged_in'] = true;
    $_SESSION['admin_user_id'] = $user['id'];
    $_SESSION['admin_username'] = $user['username'];
    $_SESSION['admin_role'] = $user['role'];
    $_SESSION['client_code'] = $user['client_code'];
    
    // Generate session token (in production, use JWT)
    $sessionToken = session_id();
    
    // Send response
    sendJsonResponse([
        'success' => true,
        'user' => [
            'username' => $user['username'],
            'email' => $user['email'],
            'role' => $user['role'],
            'client_code' => $user['client_code'],
            'client_name' => $user['client_name']
        ],
        'token' => $sessionToken
    ]);
    
} catch (PDOException $e) {
    error_log("Database error in login: " . $e->getMessage());
    sendErrorResponse('An error occurred during login', 500);
} catch (Exception $e) {
    error_log("Error in login: " . $e->getMessage());
    sendErrorResponse('An error occurred during login', 500);
}
?>

