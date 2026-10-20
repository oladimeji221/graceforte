<?php
// Contact / quote form handler for cPanel hosting. Receives JSON from the Vue contact page.
header('Content-Type: application/json');

const TO = 'info@graceforteltd.com';
const FROM = 'no-reply@graceforteltd.com'; // must be a mailbox on this domain for deliverability

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

$in = json_decode(file_get_contents('php://input'), true) ?: [];
$field = fn($k, $max = 200) => trim(mb_substr(str_replace(["\r", "\n"], ' ', (string)($in[$k] ?? '')), 0, $max));

// Bots fill the hidden "website" field; pretend success.
if (!empty($in['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name = $field('name');
$email = $field('email');
$phone = $field('phone', 40);
$company = $field('company');
$topic = $field('topic');
$message = trim(mb_substr((string)($in['message'] ?? ''), 0, 5000));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'invalid']);
    exit;
}

$subject = 'Website enquiry' . ($topic !== '' ? ": $topic" : '') . " from $name";
$body = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\nTopic: $topic\n\n$message\n";
$headers = [
    'From: Graceforte Website <' . FROM . '>',
    "Reply-To: $name <$email>",
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail(TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));
http_response_code($sent ? 200 : 500);
echo json_encode(['ok' => $sent]);
