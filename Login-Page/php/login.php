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
        $sql = "select * from `login-data-full`";
        $result = mysqli_query($con,$sql);
        if($result)
        {
            while($row = mysqli_fetch_assoc($result)){
                if($row['Email'] === $email)
                {
                    if($row['Password'] === $password)
                    {
                        echo(1);
                    }
                    else
                    {
                        echo(0);
                    }
                    die("");
                }
            }
            echo(-1);
        }
    }
    
?>
