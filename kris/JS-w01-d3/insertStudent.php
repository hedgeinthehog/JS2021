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
$gender = $_REQUEST['gender'];
$age = $_REQUEST['age'];

$sql = "INSERT INTO student VALUES (DEFAULT, '$name', '$surname', '$gender', $age, 1)";

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