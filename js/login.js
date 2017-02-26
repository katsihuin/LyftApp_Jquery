/*$(document).ready(function() {
	//jQuery va aqui
    $('#commentName').on('input', function() {
        var inputName=$(this);
        var name=inputName.val();
        if(name){inputName.removeClass("invalid").addClass("valid");}
        else{inputName.removeClass("valid").addClass("invalid");}
    });
     $('#commentLastName').on('input', function() {
        var inputLastName=$(this);
        var lastName=inputLastName.val();
        if(lastName){inputLastName.removeClass("invalid").addClass("valid");}
        else{inputLastName.removeClass("valid").addClass("invalid");}
    });
    $('#commentEmail').on('input', function() {
        var email =$(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email)
        {
            input.removeClass("invalid").addClass("valid")
        }else{
            input.removeClass("valid").addClass("invalid")
        }
    });
});
*/

$(document).ready(init);

function init()
{
	$('#commentName').keyup(validateName);
	$('#commentLastName').on('keyup', validateLastName);
	$('#commentEmail').on('keyup', validateEmail);
	$('#commentInfo').on('keyup', validateInfo);
	$('#btnValidation').on('click', function(){
		if(validateForm()==false)
			alert("Los campos no estan validados");
		else{
			alert("los campos estan validados");
		}
	});
	$('#btnGoBack').on('click', goBack);
}

function goBack()
{
	window.location="signup.html";
}

function validateForm()
{
    var inputName=$('#commentName').val();
    localStorage.setItem('Name', inputName);

  	var inputLastName=$('#commentLastName').val();
  	localStorage.setItem('LastName',inputLastName);

  	var inputEmail=$('#commentEmail').val();
  	localStorage.setItem('Email', inputEmail);

    if (!validateName() || !validateLastName() || !validateEmail() || !validateInfo())
	{
		jsShow("commentPrompt");
		producePrompt("Formulario debe estar validado para poder registrarte", "commentPrompt", "red");
		setTimeout(function(){jsHide("commentPrompt");}, 2000);
	}	
	else
	{
		jsShow("commentPrompt");
		producePrompt("Formulario Validado Exitósamente", "commentPrompt", "green");
	}
}

/* Muestra mensaje validación*/
function jsShow(id)
{
	document.getElementById(id).style.display="block";
}

/* Oculta mensaje validación*/
function jsHide(id)
{
	document.getElementById(id).style.display="none";
}

/* Envia Mensaje al usuario*/
function producePrompt(message, promptLocation, color)
{
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}

function firstToUpperCase()
{
	$(this[0]).keyup(function(event) {
        var box = event.target;
        var txt = $(this).val();
        var stringStart = box.selectionStart;
        var stringEnd = box.selectionEnd;
        $(this).val(txt.replace(/^(.)|(\s|\-)(.)/g, function($word) {
            return $word.toUpperCase();
        }));
        box.setSelectionRange(stringStart , stringEnd);
    });

   return this;
}

/* Valida Nombre*/
function validateName()
{
	var inputName = $('#commentName');
	var name =  inputName.val;

	inputName.val = firstToUpperCase(name);
	var nameReg = /^[A-Z][a-z]*[a-zA-Z]$/;
	
	if (name == null || name.length == 0 || /^\^s+$/.test(name))
	{
		producePrompt("Tu Nombre es requerido", "commentNamePrompt", "red");
		inputName.removeClass("valid").addClass("invalid");
		return false;
	}
	else if (!nameReg.test(name)) 
	{
		producePrompt("Compruebe que su Nombre contenga SOLO caracteres de la A-Z", "commentNamePrompt", "red");
		inputName.removeClass("valid").addClass("invalid");
		return false;
	}
	else 
	{
		producePrompt("Bienvenido(a) " + name, "commentNamePrompt", "green")
		inputName.removeClass("invalid").addClass("valid");
		return true;
	}	


}

/* Valida Apellido*/
function validateLastName()
{
	var inputLastName = $('#commentLastName');
	var lastName =  inputLastName.val;

	inputLastName.val = firstToUpperCase(lastName);

	var lastNameReg = /^[A-Z][a-z]*[a-zA-Z]$/;

	if (lastName == null || lastName.length == 0 || /^\^s+$/.test(lastName))
	{
		producePrompt("Tu Apellido es requerido", "commentLastNamePrompt", "red");
		inputLastName.removeClass("valid").addClass("invalid");
		return false;
	}
	else if (!lastNameReg.test(lastName)) 
	{
		producePrompt("Compruebe que su Apellido contenga SOLO caracteres de la A-Z", "commentLastNamePrompt", "red");
		inputLastName.removeClass("valid").addClass("invalid");
		return false;
	}
	else 
	{
		producePrompt("Apellido Válido ✔", "commentLastNamePrompt", "green");
		inputName.removeClass("invalid").addClass("valid");
		return true;
	}	
}

/* Valida Email*/
function validateEmail()
{
	var inputEmail = $('#commentEmail');
	var email = inputEmail.val;
	var emailReg = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

	if (email == null || email.length == 0 || /^\^s+$/.test(email))
	{
		producePrompt("Correo Electrónico es requerido", "commentEmailPrompt", "red");
		inputEmail.removeClass("valid").addClass("invalid");
		return false;
	}
	else if (!emailReg.test(email)) 
	{
		producePrompt("Compruebe que el Correo Electrónico contenga un formato válido. Ej: name@domain.com", "commentEmailPrompt", "red");
		inputEmail.removeClass("valid").addClass("invalid");
		return false;
	}
	else 
	{
		producePrompt("Correo Electrónico Válido ✔", "commentEmailPrompt", "green");
		inputEmail.removeClass("invalid").addClass("valid");
		return true;
	}
}

/* Valida Terminos */
function validateInfo()
{
	var info = $('#commentInfo');
	if (info.checked=true) 
	{
		producePrompt("¡Gracias por aceptar los Terminos de Usuario!", "commentInfoPrompt", "green");
		return true;
	}
}