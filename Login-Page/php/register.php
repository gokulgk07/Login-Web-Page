<?php
    function CloseCon($conn)
    {
        $conn -> close();
    }
    function OpenCon()
        {
            $dbhost = "localhost";
            $dbuser = "root";
            $dbpass = "";
            $db = "loginpage";
            $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
            return $conn;
        }
    $con = OpenCon();
    if(!$con){
        die(mysqli_error($con));
    }
    if(isset($_POST['email']) && isset($_POST['password']))
    {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $phonenumber = strval($_POST['phonenumber']);
        $DOB = $_POST['DOB'];
        $gender = $_POST['gender'];
        $username = $_POST['username'];

        $sql = "select * from `login-data-full`";
        $result = mysqli_query($con,$sql);
        if($result)
        {
            while($row = mysqli_fetch_assoc($result)){
                if($row['Email'] === $email)
                {
                    echo(-1);
                    die(0);
                }
            } 
        }
        $sql1 = "insert into `login-data-full` (Email,Password,Username,DOB,Gender,Phone) values('$email','$password','$username',
        '$DOB','$gender','$phonenumber')";
        $result1 = mysqli_query($con,$sql1);
        if($result1){
            echo "data inserted";
        }
        else
        {
            die(mysqli_error($con));
        }
    }
    
?>
