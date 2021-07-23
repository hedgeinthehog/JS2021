<?php

// create connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "university";

// check connection
$conn = new mysqli($servername, $username, $password, $dbname);

// taking the parameters from the form
$name = $_REQUEST['name'];
$surname = $_REQUEST['surname'];
$age = $_REQUEST['age'];
$gender = $_REQUEST['gender'];
$telephone = $_REQUEST['telephone'];
$mail = $_REQUEST['mail'];

$sql = "INSERT INTO rector VALUES (DEFAULT, '$name', '$surname', $age, '$gender', '$telephone', '$mail')";

if ($conn->query($sql) === TRUE){
    echo "success";
}
else {
    echo "error: " . $sql . "<br>" . $conn->error; 
}

// close connection
mysqli_close($conn);
// header('Location: ' . $_SERVER['HTTP_REFERER']);
?>