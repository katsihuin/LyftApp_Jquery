$(document).ready(init);
$('span'.helpblock)

function init()
{
	//$('span.help-block').hide();
	$('#commentName').on('keyup', validateName);
	$('#commentLastName').on('keyup', validateLastName);
	$('#commentEmail').on('keyup', validateEmail);
	$('#commentInfo').on('keyup', validateInfo);
	$('#btnValidation').on('click', validateForm);
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

  	validateName(); validateLastName(); validateEmail();

    if (validateName()==false || validateLastName()==false || validateEmail()==false || validateInfo()==false)
	{
		jsShow("commentPrompt");
		producePrompt("Formulario debe estar validado para poder registrarte", "commentPrompt", "red");
		setTimeout(function(){jsHide("commentPrompt");}, 5000);
		
	}	
	else
	{
		jsShow("commentPrompt");
		producePrompt("Formulario Validado Exitósamente", "commentPrompt", "green");
		
	}
}

/* Muestra mensaje validación*/
function jsShow()
{
	$('#commentPrompt').removeClass("alert").addClass("alert alert-warning text-center");
}

/* Oculta mensaje validación*/
function jsHide()
{
	$('#commentPrompt').hide();
}

/* Envia Mensaje al usuario*/
function producePrompt(message, promptLocation, color)
{
    $('#' + promptLocation).html(message) ;
	$('#' + promptLocation).css({"color":"color"});
}

/* Valida Nombre*/
function validateName(campo)
{
    var inputName = $('#commentName');
	var name =  inputName.val();
	var nameReg = /^[A-Z][a-z]*[a-zA-Z]$/;
	
	if (name == null || name.length == 0 || /^\^s+$/g.test(name))
	{
		producePrompt("Tu Nombre es requerido", "commentNamePrompt", "red");
		$('#input-name-group').removeClass("input-group").addClass("input-group has-error has-feedback");
		return false;
	}
	else if (!nameReg.test(name)) 
	{
		producePrompt("Compruebe que su Nombre contenga SOLO caracteres de la A-Z", "commentNamePrompt", "red");
		$('#input-name-group').removeClass("input-group").addClass("input-group has-error has-feedback");
		return false;
	}
	else 
	{
		producePrompt("Nombre Válido ✔", "commentNamePrompt", "green")
		$('#input-name-group').removeClass("input-group").addClass("input-group has-success has-feedback");
		return true;
	}	


}

/* Valida Apellido*/
function validateLastName()
{
	var inputLastName = $('#commentLastName');
	var lastName =  inputLastName.val();
	var lastNameReg = /^[A-Z][a-z]*[a-zA-Z]$/;

	if (lastName == null || lastName.length == 0 || /^\^s+$/.test(lastName))
	{
		producePrompt("Tu Apellido es requerido", "commentNamePrompt", "red");
		$('#commentLastName').removeClass("valid").addClass("invalid");
		//inputLastName.removeClass("valid").addClass("invalid");
		return false;
	}
	else if (!lastNameReg.test(lastName)) 
	{
		producePrompt("Compruebe que su Apellido contenga SOLO caracteres de la A-Z", "commentNamePrompt", "red");
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
	var email = inputEmail.val();
	var emailReg = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

	if (email == null || email.length == 0 || /^\s+$/.test(email))
	{
		producePrompt("Correo Electrónico es requerido", "commentEmailPrompt", "red");
		$('#input-email-group').removeClass("input-group").addClass("input-group has-error has-feedback")
		$('#input-email-group').append("<span id='glypcn"+"' class='glyphicon glyphicon-remove form-control-feedback'></span>");

		return false;
	}
	else if (!emailReg.test(email)) 
	{
		producePrompt("Compruebe que el Correo Electrónico contenga un formato válido. Ej: name@domain.com", "commentEmailPrompt", "red");
		$('#input-email-group').removeClass("input-group").addClass("input-group has-error has-feedback");
		return false;
	}
	else 
	{
		producePrompt("Correo Electrónico Válido ✔", "commentEmailPrompt", "green");
		$('#input-email-group').removeClass("input-group").addClass("input-group has-success has-feedback");
		return true;
	}
}

/* Valida Terminos */
function validateInfo()
{
	var info = $('#commentInfo');
	if (info.prop('checked')) 
	{
		producePrompt("¡Gracias por aceptar los Terminos de Usuario!", "commentInfoPrompt", "green");
		return true;
	}
	else
	{
		return false;
	}
}