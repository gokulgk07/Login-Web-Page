$(document).ready(function () {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    $.ajax({
        type: "POST",
        url: "http://localhost/login-page/php/profile.php",
        data: {
            "mode":1,
            "email" : email,
            "password" : password
        },
        success: (response)=>{
            const dat = JSON.parse(response)
            console.log(dat)
            $('#username').val(dat["username"])
            $('#password').val(password)
            $('#gender').val(dat["gender"])
            $('#phonenumber').val(dat["phone"])
            $('#DOB').val(dat["dob"])
            $('#mail').val(email)
        }
      });
      $("#editProfile").click(function (e){
        e.preventDefault();
        $('input').removeClass('input-realonly').addClass('input-edit');
        $("#username").prop("readonly",false);
        $("#password").prop("readonly",false);
        $("#gender").prop("readonly",false);
        $("#phonenumber").prop("readonly",false);
        $("#mail").prop("readonly",false);
        $("#DOB").prop("readonly",false);
        
    })
    $("#updateProfile").click(function (e) { 
        e.preventDefault();
        $('input').removeClass('input-edit').addClass('input-realonly');
        $("#username").prop("readonly",true);
        $("#password").prop("readonly",true);
        $("#gender").prop("readonly",true);
        $("#phonenumber").prop("readonly",true);
        $("#mail").prop("readonly",true);
        $("#DOB").prop("readonly",true);
        $.ajax({
            type: "POST",
            url: "http://localhost/login-page/php/profile.php",
            data: {
                "mode":2,
                "email" : $('#mail').val(),
                "password" : $('#password').val(),
                "gender": $('#gender').val(),
                "dob": $('#DOB').val(),
                "username": $("#username").val(),
                "phone":$('#phonenumber').val()
            },
            success: (response)=>{
                console.log(response)
            }
          });
    });

});