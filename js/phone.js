$(document).ready(init);

function init() 
{   
    $('#inputPhoneNumber').keyup(validatePhoneNumber);

    //Retreive your key on the local storage
    var getFlag = localStorage.getItem('country');
	var getDialCode = localStorage.getItem('dialCode');

    $('#flag').removeClass().addClass(getFlag);
    $('#dialCode').text(getDialCode);

    //$('input').keydown(keyPresss);

}

function goBack()
{
    window.location="main.html";
}

//Si otro cosa que no sea un número es presionado
function keyPresss(event) 
{
    var key = event.keyCode;
    var char = event.which;
    if (key == 8 || key == 9 || (char < 48 || char > 57))
    {
        event.preventDefault();
    }
}

/* Envia Mensaje al usuario*/
function producePrompt(message, promptLocation, color)
{
    $('#' + promptLocation).html(message) ;
    $('#' + promptLocation).css({"color":"color"});
}


function validatePhoneNumber()
{
    var inputPhoneNumber=$('#inputPhoneNumber');
    var phoneNumber = inputPhoneNumber.val();
    var phoneReg = /^([0-9])*$/;
    localStorage.setItem('PhoneNumber', phoneNumber);

    if(phoneNumber == null || phoneNumber.length == 0 || /^\^s+$/g.test(phoneNumber))
    {   
        producePrompt("No ingresaste tu número teléfonico", "commentPhonePrompt", "red");
        $('#glypcn').remove();
        $('#input-phone-group').attr("class", "form-group has-error has-feedback");
        $('#input-phone-group').append("<i id='glypcn' class='fa fa-times form-control-feedback'></i>");
        return false;    
    }  
    else if(!phoneReg.test(phoneNumber))
    {
        producePrompt("Max 10 numeros", "commentPhonePrompt", "red");
        $('#glypcn').remove();
        $('#input-phone-group').attr("class", "form-group has-error has-feedback");
        $('#input-phone-group').append("<i id='glypcn' class='fa fa-times form-control-feedback'></i>");
        return false;    
    } 
    else if(phoneNumber.length<10 || phoneNumber.length>10)
    {
        producePrompt("Max 10 numeros", "commentPhonePrompt", "red");
        $('#glypcn').remove();
        $('#input-phone-group').attr("class", "form-group has-error has-feedback");
        $('#input-phone-group').append("<i id='glypcn' class='fa fa-times form-control-feedback'></i>");
        return false;    
    }
   
    else 
    {
        $('#glypcn').remove();
        $('#input-phone-group').attr("class", "form-group has-success has-feedback");
        $('#input-phone-group').append("<i id='glypcn' class='fa fa-check form-control-feedback'></i>");
        return true;
    }
}

function generateCode(event) 
{
    event.preventDefault();
    var numberLength = $("#phoneNumber").val().length;
    var randomNumber = Math.floor(Math.random() * 900) + 99;
    var lab = "LAB-";

    if(numberLength === 9)
    {
        var code = (lab += randomNumber);
        localStorage.setItem('codeLab', code);
        alert
    }
    else
    {
        alert
        $('#phoneNumber').focus();
        $('#phoneNumber').val('');
    }   
}