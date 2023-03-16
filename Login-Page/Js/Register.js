$(document).ready(function () {
    $("#Email-exist").hide();
    $("#Success").hide();
    $("#login-form").submit(function (e) { 
        e.preventDefault();
        const password = $("#password").val();
        const email = $("#email1").val();
        const phonenumber = $("#phonenumber").val();
        const gender = $("#gender").val();
        const DOB = $("#DOB").val();
        const UserName = $("#username").val();
        localStorage.setItem('password',password)
        localStorage.setItem('email',email)
        $.ajax({
            type: "POST",
            url: "http://localhost/login-page/php/register.php",
            data: {
                "email" : email,
                "password" : password,
                "phonenumber" : phonenumber,
                "gender" : gender,
                "DOB" : DOB,
                "username" : UserName
            },
            success: (response)=>{
                console.log(response)
                if(response == -1)
                {
                    $("#Email-exist").show();
                    $("#Success").hide();
                }
                else
                {
                    $("#Success").show();
                    $("#Email-exist").hide();
                }
                console.log(response)
            }
          });
    });

});