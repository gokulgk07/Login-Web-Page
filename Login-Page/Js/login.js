const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

$(document).ready(function(){
    $("#Email-error").hide();
    $("#Password-error").hide();
})
$(document).ready(function(){
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
            
            pwFields.forEach(password => {
                if(password.type === "password"){
                    password.type = "text";
                    eyeIcon.classList.replace("bx-hide", "bx-show");
                    return;
                }
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            })
            
        })
    })      
})

$(document).ready(function(){
    links.forEach(link => {
        link.addEventListener("click", e => {
           e.preventDefault();
           forms.classList.toggle("show-signup");
        })
    })
})

$(document).ready(function () {
    $("#login-form").submit(function (e) { 
        e.preventDefault();
        const password = $("#password").val();
        const email = $("#email").val();
        localStorage.setItem('password',password)
        localStorage.setItem('email',email)
        console.log(password," ",email);
        $.ajax({
            type: "POST",
            url: "login.php",
            data: {
                "email" : email,
                "password" : password
            },
            success: (response)=>{
                if(response == 0)
                {
                    $("#Password-error").show();
                    $("#Email-error").hide();
                }
                else if(response == -1){
                    $("#Email-error").show();
                    $("#Password-error").hide();
                }
                else
                {
                    $("#Email-error").hide();
                    $("#Password-error").hide();
                    window.location.href = "profile.html";
                }
            }
          });
    });

});