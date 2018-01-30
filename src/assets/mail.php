<?php

// Pear Mail Library
require_once 'C:\dev\php-7.2.1-Win32-VC15-x86\pear\Mail.php';

echo(phpinfo());

if (isset($_POST)) {
    echo('Sending mail');
    $from_name = $_POST['name'];
    $from = $_POST['email'];
    $to = 'stonemonkeygames@gmail.com';
    $website = 'SMS Contact Form';
    $subject = "$website: New message from $from_name";
    $body = $_POST['message'];

    $headers = array(
        'From' => $from,
        'To' => $to,
        'Subject' => $subject
    );

    $smtp = Mail::factory('smtp', array(
            'host' => 'ssl://smtp.gmail.com',
            'port' => '465',
            'auth' => true,
            'debug' => true,
            'username' => 'stonemonkeygames@gmail.com',
            'password' => 'CrackedOutMonkey'
        ));

    $mail = $smtp->send($to, $headers, $body);

    if (PEAR::isError($mail)) {
        echo('<p>' . $mail->getMessage() . '</p>');
    } else {
        echo('<p>Message successfully sent!</p>');
    }
}
else{
    echo('Failed to send mail');
}
?>