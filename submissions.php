
<!DOCTYPE html>
<html>
<head>
    <style>

table,th,tr,td

{

border-style:solid;

border-width:2px;

border-color:black;

}
table {
    vertical-align: middle;
}

</style>

    <title>Submissions</title>
</head>
<body align="center">
    <h1>Submissions</h1>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT first_name, email,contact,college,city,url FROM data";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table align='center'><tr><th>First name</th><th>Email</th><th>Mobile No</th><th>College</th><th>City</th><th>URL</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "</td><td>".$row["first_name"]."</td><td>".$row["email"]."</td><td>".$row["contact"]."</td><td>".$row["college"]."</td><td>".$row["city"]."</td><td>".'<a href = "'.$row["url"].'" target="_blank">view</a>'."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$conn->close();
?>

</body>
</html>