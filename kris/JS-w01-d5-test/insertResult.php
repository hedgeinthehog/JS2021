<?php

// create connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "exam";

// check connection
$conn = new mysqli($servername, $username, $password, $dbname);

// taking the parameters from the form
$name = $_REQUEST['name'];
$surname = $_REQUEST['surname'];
$grade = $_REQUEST['grade'];


// SQL query for result insertion
$sql = "INSERT INTO results VALUES (DEFAULT, '$name', '$surname', '$grade')";

if ($conn->query($sql) === TRUE){
    echo "success";
}
else {
    echo "0 results";
}

// close connection
mysqli_close($conn);
// header('Location: ' . $_SERVER['HTTP_REFERER']);
?>