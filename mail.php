
<?php
// Prevent buffering issues and ensure clean output
ob_clean();

// Set proper headers for CORS and JSON response
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json"); 

// Handle preflight OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Only POST requests are allowed']);
    exit();
}

// Get JSON data from request
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (!isset($input['name']) || !isset($input['email']) || !isset($input['message'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Naam, e-mail en bericht zijn verplichte velden']);
    exit();
}

// Simple email validation
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ongeldig e-mailadres']);
    exit();
}

// Sanitize input data
$name = htmlspecialchars($input['name']);
$email = htmlspecialchars($input['email']);
$message = htmlspecialchars($input['message']);

// Set email recipient
$to = 'sipkejan@demensenwijzer.nl';

// Create email subject and headers
$subject = "Nieuw contactformulier van " . $name;
$headers = "From: noreply@demensenwijzer.nl\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Compose email content
$email_content = "
<html>
<head>
    <title>Nieuw contactformulier</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        h2 { color: #005A9C; }
        .footer { margin-top: 30px; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>Nieuw bericht via het contactformulier</h2>
        <p><strong>Naam:</strong> $name</p>
        <p><strong>E-mail:</strong> $email</p>
        <p><strong>Bericht:</strong></p>
        <p>" . nl2br($message) . "</p>
        <div class='footer'>
            <hr>
            <p>Dit bericht is verzonden via het contactformulier op demensenwijzer.nl</p>
        </div>
    </div>
</body>
</html>
";

// Send email
$success = mail($to, $subject, $email_content, $headers);

// Return appropriate response
if ($success) {
    echo json_encode([
        'success' => true, 
        'message' => 'Bericht succesvol verzonden'
    ]);
} else {
    http_response_code(500); // Internal Server Error
    echo json_encode([
        'error' => 'Er is een probleem opgetreden bij het verzenden van het bericht'
    ]);
}

// Ensure script execution stops here
exit();
?>
