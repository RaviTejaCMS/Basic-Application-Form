<?php
    session_start();
    $name = $_POST['firstname'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $college = $_POST['college'];
    $city = $_POST['city'];
    $currentDir = getcwd();
    $uploadDirectory = "\uploads\\";
    $uploadPath = $currentDir . $uploadDirectory;
    $errors = "";
    $k=false;
    $fileExtensions = ['doc','docx','pdf']; // Get all the file extensions
    $fileName = $_FILES['myfile']['name'];
    $fileSize = $_FILES['myfile']['size'];
    $fileTmpName  = $_FILES['myfile']['tmp_name'];
    #$fileType = $_FILES['myfile']['type'];
    $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
    $jj=$uploadDirectory . $email.".".$fileExtension;
    $uploadPath = $currentDir .$jj; 
    if (isset($_POST['submit'])) {

        if (! in_array($fileExtension,$fileExtensions)) {
            $errors = $errors."Please upload a Valid Document";
        }
        if ($fileSize > 10000000) {
            $errors = $errors." This file is more than 10MB. Sorry, it has to be less than or equal to 10MB";
        }

        if (empty($errors)) {
            $didUpload = move_uploaded_file($fileTmpName, $uploadPath);

            if ($didUpload) {
                $errors = $errors." The file " . basename($fileName) . " has been uploaded";
                $k=true;

            } else {
                $errors = $errors." An error occurred somewhere. Try again or contact the admin";
            }
        }
    }
    $link = mysqli_connect("localhost", "root", "", "db");
    if($link === false){
        die("ERROR: Could not connect. " . mysqli_connect_error());
    }
    $jj=mysqli_real_escape_string($link,$uploadPath);
    $sql = "INSERT into data(first_name, email,contact,college,city,url) values ('$name', '$email', '$contact', ' $college',' $city','$jj')";
    if($k==true){
    if(mysqli_query($link, $sql)){
        $errors = $errors." Your Response has been Recorded";
    } else{
        $errors = $errors." ERROR: Could not able to execute $sql. " . mysqli_error($link);
    }
}
    mysqli_close($link);
    $_SESSION['message'] = $errors;
    header("Location: index.php");
?>