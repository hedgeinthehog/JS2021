<?php

$servername = "localhost:4306";
$username = "root";
$password = "";
$dbname = "quizz";
 
// Create connection
$conn = new mysqli($servername,
    $username, $password, $dbname);
 
// Check connection
if ($conn->connect_error) {
    
    die("Connection failed: "
        . $conn->connect_error);
}

// Taking all values from the form data(input)
$name =  $_REQUEST['name'];
$surname = $_REQUEST['surname'];
$grade =  $_REQUEST['grade'];
 
$sql = "INSERT INTO quizzparticipants VALUES (DEFAULT,'$name',
'$surname','$grade')";
 
if ($conn->query($sql) === TRUE) {
    //echo "record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
        // Close connection
        mysqli_close($conn);
        header('Location: ' . $_SERVER['HTTP_REFERER']);
        // header('Location: thankyou.html');
?>