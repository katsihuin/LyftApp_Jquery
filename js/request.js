$(document).on('ready', init);

function init(){
  var dropOffLocation = null;
  $('#btnRequestLyft').on('click', nextPage);
  $('#btn-goBack').on('click', goBack);
	$('#carImgRequest').attr({'src': localStorage.getItem('srcCarImg')});
	$('#carNameRequest').text(localStorage.getItem('srcCarName'));
	$('#carSeatsRequest').text(localStorage.getItem('srcCarSeats'));
	requestPriceEstimate();
}

/* Regresa a la sección PickUP */
function goBack(){
  $('#requestLyft').hide();
  $('#setPickUp').show();
}

/* Estimado de Precio */
function requestPriceEstimate() {
	var type = localStorage.getItem('type');
    $.ajax({
        url:"http://clientes.geekadvice.pe/api/estimado",
        data:{"tipo":type}
    }).success(function(_data){
      //console.log(_data.estimado); 
        updatePriceEstimate(_data);
    });   
}

/* Actualizacion Precio */
function updatePriceEstimate(_info) {
	var min = _info.estimado.min;
	var max = _info.estimado.max;
	var currency = _info.estimado.moneda;
    localStorage.setItem('minPrice', min);
    localStorage.setItem('maxPrice', max);

	$('#priceEstimate').text(currency+min+' - '+max);
	updateAddress();
}


/* Actualizacion Address */
function updateAddress() {
  var address = localStorage.getItem('srcAddress');
  $('#pickUpLocation').text(address);
}

/* Continuar a la pagina del Conductor asignado */
function nextPage(){
  /*var destination= $('#dropOffLocation').text();
  if(destination=='Add Drop-Off Location'){
    alert("Ingresa la dirección de destino");
  }else{
  window.location= "payment.html";
  }*/
  window.location = "payment.html"
}
