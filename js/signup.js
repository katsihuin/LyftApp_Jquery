$(document).ready(init);
function init() {
   
        //Retreive your key on the local storage
        var getFlag = localStorage.getItem('country');
    	var getDialCode = localStorage.getItem('dialCode');

        $('#flag').removeClass().addClass(getFlag);
        $('#dialCode').text(getDialCode);
  
}

function goBack()
{
    window.location="index.html";
}
function  validateCode()
{
    return (localStorage.getItem('country') != null);
}
/****************************Funcion que el 'SRC' de la imagen exista en mi LocalStorage***************************/
function  validateImage()
{
    return(localStorage.getItem('dialCode') != null);
}
//Si otro cosa que no sea un número es presionado
function keyPresss(event) {
    if (event.which < 48 || event.which > 57){
        event.preventDefault();
    }
}

$('input').keydown(keyPresss);
/*function getCountry()
{
    var inputCountry = country.value;
	localStorage.setItem('country', inputCountry);
}*/