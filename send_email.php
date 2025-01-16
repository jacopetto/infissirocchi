<?php
// Configura l'indirizzo email del destinatario e del mittente
$destinatario = "rocchi.jacopo97@gmail.com";
$mittente = "info@rocchiinfissi.it";

// Recupera i dati inviati dal modulo
$nome = htmlspecialchars($_POST['name']);
$numero = htmlspecialchars($_POST['number']);
$emailCliente = htmlspecialchars($_POST['email']);
$messaggio = htmlspecialchars($_POST['message']);

// Componi l'email
$subject = "Richiesta Preventivo da $nome";
$body = "Hai ricevuto una nuova richiesta di preventivo.\n\n";
$body .= "Nome: $nome\n";
$body .= "Telefono: $numero\n";
$body .= "Email: $emailCliente\n\n";
$body .= "Messaggio:\n$messaggio\n";

// Configura gli header dell'email
$headers = "From: $mittente\r\n";
$headers .= "Reply-To: $emailCliente\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Invia l'email
if (mail($destinatario, $subject, $body, $headers)) {
    echo "Grazie per la tua richiesta. Ti contatteremo a breve.";
} else {
    echo "Si è verificato un errore durante l'invio. Riprova più tardi.";
}
?>
