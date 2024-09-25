<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    
    // Here, you can process the data (e.g., save to a database)

    echo "Thank you, $name! Your email ($email) has been received.";
} else {
    echo "Invalid request.";
}
?>