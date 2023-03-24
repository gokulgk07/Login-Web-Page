<?php    

    $redis = new Redis();
    $redis->connect('127.0.0.1', 6379);

    ini_set('session.save_handler', 'redis');
    ini_set('session.save_path', 'tcp://127.0.0.1:6379');

    session_start();

    $_SESSION['username'] = $_POST['username'];

    $username = $_SESSION['username'] ?? 'unknown';
    echo "Session value: $username";
    
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
    if($_POST['mode']==1)
    {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $sql = "select * from `login-data-full`";
        $result = mysqli_query($con,$sql);
        if($result)
        {
            
            while($row = mysqli_fetch_assoc($result)){
                $data = new stdClass();
                $data -> dob = $row['DOB'];
                $data -> gender = $row['Gender'];
                $data -> phone = $row['Phone'];
                $data -> username = $row['Username'];
                $myjson = json_encode($data);
                if($row['Email'] === $email)
                {
                    echo($myjson);

                }
            }
        }
    }
    if($_POST['mode']==2)
    {
        var_dump($_POST);
        $email = $_POST['email'];
        $password = $_POST['password'];
        $phone = $_POST['phone'];
        $dob = $_POST['dob'];
        $gender = $_POST['gender'];
        $username = $_POST['username'];
        $sql = "update `login-data-full` set Email='$email',Password='$password',DOB='$dob',Phone='$phone',Gender='$gender',Username='$username' WHERE email='$email'";
        $result=mysqli_query($con,$sql);
        if($result)
        {
            echo("success");
        }
    }
    
    ?>