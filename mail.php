
<?php
// CORS headers toevoegen om cross-domain verzoeken toe te staan
header("Access-Control-Allow-Origin: *"); // Vervang * door je specifieke domein in productie voor betere beveiliging
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json"); // Zorgen dat alle responses JSON zijn

// Controleer of het een preflight OPTIONS verzoek is (voor CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Controleer of het een POST verzoek is
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Alleen POST-verzoeken zijn toegestaan']);
    exit();
}

// Ontvang de JSON-gegevens van het verzoek
$input = json_decode(file_get_contents('php://input'), true);

// Valideer benodigde velden
if (!isset($input['name']) || !isset($input['email']) || !isset($input['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Naam, e-mail en bericht zijn verplichte velden']);
    exit();
}

// Eenvoudige e-mailvalidatie
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ongeldig e-mailadres']);
    exit();
}

// Gegevens ophalen
$name = htmlspecialchars($input['name']);
$email = htmlspecialchars($input['email']);
$message = htmlspecialchars($input['message']);

// E-mailontvangers
$to = 'sipkejan@sjbmedia.nl'; // Vervang dit door je eigen e-mailadres

// E-mailonderwerp en headers
$subject = "Nieuw contactformulier van " . $name;
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// E-mailinhoud samenstellen
$email_content = "
<html>
<head>
    <title>Nieuw contactformulier</title>
</head>
<body>
    <h2>Je hebt een nieuw bericht ontvangen via het contactformulier</h2>
    <p><strong>Naam:</strong> $name</p>
    <p><strong>E-mail:</strong> $email</p>
    <p><strong>Bericht:</strong></p>
    <p>" . nl2br($message) . "</p>
    <hr>
    <p><small>Dit bericht is verzonden via het contactformulier op demensenwijzer.nl</small></p>
</body>
</html>
";

// E-mail versturen
$success = mail($to, $subject, $email_content, $headers);

// Resultaat teruggeven
if ($success) {
    echo json_encode(['success' => true, 'message' => 'Bericht succesvol verzonden']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Er is een fout opgetreden bij het verzenden van het bericht']);
}
?>
