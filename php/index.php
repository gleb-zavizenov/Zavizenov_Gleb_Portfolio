<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP Form</title>
    <style>
        <?php 
            include 'style.css'
        ?>
    </style>
</head>
<body>
    <div class="container">
        <h1>Contact Form</h1>
        <form action="contact.php" method="post">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="name" name="name" required>
        
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="email" name="email" required>
        
            <label for="subject">Subject</label>
            <input id="subject" type="text" placeholder="subject" name="subject">
        
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
        
            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>