<?php

// create connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "university";

// check connection
$conn = new mysqli($servername, $username, $password, $dbname);


// Lists students by faculty name
$sql = "SELECT DISTINCT Name, Surname FROM student";

$result = $conn->query($sql);
if($result!== false && $result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        echo $row["Name"] . " " . $row["Surname"] . "<br>";
    }
}
else {
    echo "0 results";
}

// close connection
mysqli_close($conn);
// header('Location: ' . $_SERVER['HTTP_REFERER']);
?>