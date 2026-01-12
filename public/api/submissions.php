<?php
/**
 * Form Submissions API Endpoint
 * 
 * GET /api/submissions.php - Get all form submissions with optional filters
 * 
 * Query Parameters:
 * - type: Filter by form type (contact, training_registration)
 * - status: Filter by status (new, read, contacted, completed, spam)
 * - limit: Number of results (default: 100)
 * - offset: Pagination offset (default: 0)
 */

require_once 'config.php';

// Set CORS headers
setCorsHeaders();

// Verify admin session (comment out for testing)
// verifyAdminSession();

// Get database connection
$db = getDbConnection();

try {
    // Get query parameters
    $type = $_GET['type'] ?? null;
    $status = $_GET['status'] ?? null;
    $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 100;
    $offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;
    
    // Validate limit
    if ($limit > 500) $limit = 500;
    if ($limit < 1) $limit = 100;
    
    // Build query
    $sql = "SELECT 
                cfd.id,
                cfd.form_type,
                cfd.name,
                cfd.email,
                cfd.phone,
                cfd.company,
                cfd.message,
                cfd.status,
                cfd.submitted_at,
                cfd.read_at,
                cfd.processed_at,
                cfd.notes,
                c.client_name,
                c.client_code
            FROM client_form_data cfd
            INNER JOIN clients c ON cfd.client_id = c.id
            WHERE 1=1";
    
    $params = [];
    
    // Add filters
    if ($type) {
        $sql .= " AND cfd.form_type = :type";
        $params[':type'] = $type;
    }
    
    if ($status) {
        $sql .= " AND cfd.status = :status";
        $params[':status'] = $status;
    }
    
    // Add ordering and pagination
    $sql .= " ORDER BY cfd.submitted_at DESC LIMIT :limit OFFSET :offset";
    
    // Prepare and execute
    $stmt = $db->prepare($sql);
    
    // Bind parameters
    foreach ($params as $key => $value) {
        $stmt->bindValue($key, $value);
    }
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    
    $stmt->execute();
    $submissions = $stmt->fetchAll();
    
    // Get total count for pagination
    $countSql = "SELECT COUNT(*) as total 
                 FROM client_form_data cfd
                 INNER JOIN clients c ON cfd.client_id = c.id
                 WHERE 1=1";
    
    if ($type) {
        $countSql .= " AND cfd.form_type = :type";
    }
    if ($status) {
        $countSql .= " AND cfd.status = :status";
    }
    
    $countStmt = $db->prepare($countSql);
    foreach ($params as $key => $value) {
        $countStmt->bindValue($key, $value);
    }
    $countStmt->execute();
    $totalCount = $countStmt->fetch()['total'];
    
    // Get statistics
    $statsSql = "SELECT 
                    COUNT(*) as total,
                    SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as new_count,
                    SUM(CASE WHEN form_type = 'training_registration' THEN 1 ELSE 0 END) as training_count,
                    SUM(CASE WHEN form_type = 'contact' THEN 1 ELSE 0 END) as contact_count
                 FROM client_form_data cfd
                 INNER JOIN clients c ON cfd.client_id = c.id";
    
    $statsStmt = $db->query($statsSql);
    $stats = $statsStmt->fetch();
    
    // Send response
    sendJsonResponse([
        'success' => true,
        'data' => $submissions,
        'pagination' => [
            'total' => (int)$totalCount,
            'limit' => $limit,
            'offset' => $offset,
            'hasMore' => ($offset + $limit) < $totalCount
        ],
        'stats' => [
            'total' => (int)$stats['total'],
            'new' => (int)$stats['new_count'],
            'training' => (int)$stats['training_count'],
            'contact' => (int)$stats['contact_count']
        ]
    ]);
    
} catch (PDOException $e) {
    error_log("Database error: " . $e->getMessage());
    sendErrorResponse('Database error occurred', 500);
} catch (Exception $e) {
    error_log("Error: " . $e->getMessage());
    sendErrorResponse('An error occurred', 500);
}
?>

