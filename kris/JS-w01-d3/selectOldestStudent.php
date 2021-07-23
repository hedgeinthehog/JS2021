<?php

// create connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "university";

// check connection
$conn = new mysqli($servername, $username, $password, $dbname);

$name = $_REQUEST['name'];

// Lists students by faculty name
$sql = "SELECT Id_Student, Surname, Name, Gender, Age FROM student WHERE Age = (SELECT MAX(Age) FROM student)";

$result = $conn->query($sql);
if($result!== false && $result->num_rows > 0){
    //
    while($row = $result->fetch_assoc()){
        echo "id: " . $row["Id_Student"] . " - " . $row["Name"] . " " . $row["Surname"] . " " . $row["Gender"] . " " . $row["Age"] . "<br>";

        //create
        //$cookie_name = "StudentName";
    }
}
else {
    echo "0 results";
}

// close connection
mysqli_close($conn);
// header('Location: ' . $_SERVER['HTTP_REFERER']);
?>