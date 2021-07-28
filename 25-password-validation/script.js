var state = false;
function showtoggle(){
    if(state)
    {
        document.getElementById("myPassword").setAttribute("type","password");
        document.getElementById("eye").setAttribute("class","far fa-eye");
        state = false;
    }
    else
    {
        document.getElementById("myPassword").setAttribute("type","text");
        document.getElementById("eye").setAttribute("class","far fa-eye-slash");
        state = true;
    }
}

myPassword.onfocus = function()
{
    document.getElementById("message").style.opacity = "1";
}

myPassword.onblur = function()
{
    document.getElementById("message").style.opacity = "0";
}

//Validation

var Password = document.getElementById("myPassword");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var specialCHAR = document.getElementById("specialCHAR");
var length = document.getElementById("length");

Password.onkeyup = function()
{
    //Number
    var num = /^(?=.*[0-9])/;
    if(Password.value.match(num))
    {
        document.getElementById('numberIcon').setAttribute("class","fas fa-check")
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else
    {
        document.getElementById('numberIcon').setAttribute("class","fas fa-times")
        number.classList.remove("invalid");
        number.classList.add("valid");
    }

    //Character
    var char = /^(?=.*[@#$ %^&*])/;
    if(Password.value.match(char))
    {
        document.getElementById('charIcon').setAttribute("class","fas fa-check")
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else
    {
        document.getElementById('charIcon').setAttribute("class","fas fa-times")
        number.classList.remove("invalid");
        number.classList.add("valid");
    }

    //Uppercase
    if(Password.value.match(/[A-Z]/))
    {
        document.getElementById('capitalIcon').setAttribute("class","fas fa-check")
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else
    {
        document.getElementById('capitalIcon').setAttribute("class","fas fa-times")
        number.classList.remove("invalid");
        number.classList.add("valid");
    }

    //length
    if(Password.value.length >= 8)
    {
        document.getElementById('lengthIcon').setAttribute("class","fas fa-check")
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else
    {length
        document.getElementById('lengthIcon').setAttribute("class","fas fa-times")
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
}
