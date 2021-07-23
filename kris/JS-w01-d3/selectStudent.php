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

// Search by name
// $sql = "SELECT * FROM student WHERE name='$name'";

// Lists students by faculty name
$sql = "SELECT s.Id_Student, s.Name, s.Surname, s.Gender, s.Age FROM student s INNER JOIN faculty f "
. "ON s.Id_Faculty = f.Id_Faculty "
. "WHERE f.Name LIKE '%$name%';";

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