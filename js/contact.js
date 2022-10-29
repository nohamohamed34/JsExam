function openNav() {
    if ($("#mySidenav").width() == "250") {
        closeNav();
        console.log("00")
    } else {
        $("#mySidenav").width("250px");
       // head-nav
        //$("#h2-nav").css("margin-left", "250px");
        $(".head-nav").css("margin-left", "250px");
         $("#h2-nav").html(`<i class="fa-solid fa-xmark"></i>`);
        $("#search-container").css("margin-left", "20px");
    }
    // initation animation
new WOW().init();
}

function closeNav() {
    $("#mySidenav").width("0px");
    //$("#h2-nav").css("margin-left", "0px");
    $(".head-nav").css("margin-left", "0px");
    $("#search-container").css("margin-left", "10px");
    $("#h2-nav").html(`<i class="fa-solid fa-bars"></i>`);
}


let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");
let userAge = document.getElementById("age");
let userPassword = document.getElementById("password");
let userRePassword = document.getElementById("rePassword");
let userNameAlert = document.getElementById("namealert");
let userEmailAlert = document.getElementById("emailalert");
let userPhoneAlert = document.getElementById("phonealert");
let userAgeAlert = document.getElementById("agealert");
let userpasswordAlert = document.getElementById("passwordalert");
let userRepasswordAlert = document.getElementById("repasswordalert");
$('.form-control').keyup(function(){
 let r=   $(this).attr('id');
 if(r =="name")
 {
if(userNameValid())
{
    userName.classList.add("is-valid");
    userName.classList.replace("is-invalid", "is-valid");
    userNameAlert.classList.replace("d-block", "d-none");
}else
{
    userName.classList.add("is-invalid");
    userName.classList.replace("is-valid", "is-invalid")
    userNameAlert.classList.replace("d-none", "d-block")
}
 }
 else if(r=="email"){
if(userEmailValid())
{
    userEmail.classList.add("is-valid");
    userEmail.classList.replace("is-invalid", "is-valid");
    userEmailAlert.classList.replace("d-block", "d-none");
}
else{
    userEmail.classList.add("is-invalid");
    userEmail.classList.replace("is-valid", "is-invalid")
    userEmailAlert.classList.replace("d-none", "d-block")
}
 }
 else if(r=="phone"){
    if(userPhoneValid())
    {
        userPhone.classList.add("is-valid");
        userPhone.classList.replace("is-invalid", "is-valid");
        userPhoneAlert.classList.replace("d-block", "d-none");
    }
    else{
        userPhone.classList.add("is-invalid");
        userPhone.classList.replace("is-valid", "is-invalid")
        userPhoneAlert.classList.replace("d-none", "d-block")
    }
 }
 else if(r=="age"){
    if(userAgeValid())
    {
        userAge.classList.add("is-valid");
        userAge.classList.replace("is-invalid", "is-valid");
        userAgeAlert.classList.replace("d-block", "d-none");
    }
    else{
        userAge.classList.add("is-invalid");
        userAge.classList.replace("is-valid", "is-invalid")
        userAgeAlert.classList.replace("d-none", "d-block")
    }
 }
 else if(r=="password"){
    if(userPasswordValid())
    {
        userPassword.classList.add("is-valid");
        userPassword.classList.replace("is-invalid", "is-valid");
        userpasswordAlert.classList.replace("d-block", "d-none");
    }
    else{
        userPassword.classList.add("is-invalid");
        userPassword.classList.replace("is-valid", "is-invalid")
        userpasswordAlert.classList.replace("d-none", "d-block")
    }
 }
 else if(r=="rePassword"){
    if(userRePasswordValid())
    {
        userRePassword.classList.add("is-valid");
        userRePassword.classList.replace("is-invalid", "is-valid");
        userRepasswordAlert.classList.replace("d-block", "d-none");
    }
    else{
        userRePassword.classList.add("is-invalid");
        userRePassword.classList.replace("is-valid", "is-invalid")
        userRepasswordAlert.classList.replace("d-none", "d-block")
    }
 }
 if(userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid()){
    document.getElementById("submitBtn").removeAttribute("disabled")
}else{
    document.getElementById("submitBtn").setAttribute("disabled","true")
}
});

function userNameValid() {
    return /^[a-zA-Z ]+$/.test(userName.value)
}

function userEmailValid() {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)
}

function userPhoneValid() {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)
}

function userAgeValid() {
    return /^[1-9][0-9]?$|^100$/.test(userAge.value)
}
function userPasswordValid() {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
}

function userRePasswordValid() {
    return userPassword.value == userRePassword.value
}


