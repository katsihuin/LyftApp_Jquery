$(document).on('ready', init);

var dropOffLocation = null;
var currentMarker = null;
var directionsDisplay = null;
var directionsService = null;

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
        url:"https://clientes.geekadvice.pe/api/estimado",
        data:{"tipo":type}
    }).success(function(_data){
      //console.log(_data.estimado); 
        updatePriceEstimate(_data);
    });   
}

/* Actualizacion Precio */
function updatePriceEstimate(_info){
	var min = _info.estimado.min;
	var max = _info.estimado.max;
	var currency = _info.estimado.moneda;
    localStorage.setItem('minPrice', min);
    localStorage.setItem('maxPrice', max);
	$('#priceEstimate').text(currency+min+' - '+max);
	updateCarInfo();
}

/* Actualizacion de información de acuerdo al tipo de vehiculo actualizado */
function updateCarInfo(){
  $('#carImgRequest').attr({'src': localStorage.getItem('srcCarImg')});
  $('#carNameRequest').text(localStorage.getItem('srcCarName'));
  $('#carSeatsRequest').text(localStorage.getItem('srcCarSeats'));
  $('#pickUpLocation').text(localStorage.getItem('srcAddress'));
  updateAddress();
}

/* Actualizacion de dirección pickup */
function updateAddress(){
  var address = localStorage.getItem('srcAddress');
  $('#pickUpLocation').text(address);
  inputAddressSearch();
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
}

/*Añadir destino*/
function inputAddressSearch(){
  var searchBox = new google.maps.places.SearchBox(document.getElementById('dropOffLocation'));

  google.maps.event.addDomListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();
    var bounds = new google.maps.LatLngBounds();
    var i, place;

    for (i = 0; place = places[i]; i++){
      bounds.extend(place.geometry.location);
      dropOffLocation = new google.maps.Marker({
        map: map,
        title: place.name,
        position: place.geometry.location,
        draggable: true
      });
    }
    map.fitBounds(bounds);
    map.setZoom(15);
    storageDropOff(dropOffLocation);  
  })﻿;
}

/* Guardar direccion de destino */
function storageDropOff(address){
  localStorage.setItem('srcDropOff',address);
  displayDropOff();
}

/* Mostrar direccion de destino en pantalla y ruta*/
function displayDropOff(){
  var dropOff=localStorage.getItem('srcDropOff');
  $('#dropOffContent').text(dropOff);
  calculateRoute(currentMarker.position, dropOffLocation.position);
}
/*
function storageDropOff(address){
  localStorage.setItem('srcDropOff',JSON.stringify(address));
  displayDropOff();
}


function displayDropOff(){

  var dropOff=localStorage.getItem('srcDropOff');
  //$('#dropOffContent').text(dropOff);
  console.log('retrievedObject: ', JSON.parse(dropOff));
  calculateRoute(currentMarker.position, dropOffLocation.position);
}*/
/* Calcular ruta*/
function calculateRoute(start, end){
  var bounds = new google.maps.LatLngBounds();
  map.fitBounds(bounds);

  var listener = google.maps.event.addListener(map, "idle", function() { 
  if (map.getZoom() > 14) map.setZoom(14); 
  google.maps.event.removeListener(listener); 
  });

  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function (response, status){
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      directionsDisplay.setMap(map);
    } else {
      alert("Se ha producido un error en la dirección solicitada: " + status);
    }
  });
  
}

/*Continuar a la pagina del Conductor asignado */
function nextPage(){
  var destination= $('#dropOffContent').text();
  if(destination=='Add Drop-Off Location'){
    alert("Ingresa la dirección de destino");
  }else{
  window.location= "payment.html";
  }
}
