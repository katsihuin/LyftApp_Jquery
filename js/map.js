$(document).ready(init);

var map;

function init() {
  getMyLocation();
}

function goForward()
{
  window.location="payment.html";
}

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    alert('Sin soporte de geolocalización');
  }
}


//función invoca asincrónicamente por la API de geolocalización HTML5
function displayLocation(position) {

  //Valores de latitud y longitud obtenidos de HTML5 API
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
    //console.log(position.coords.latitude,position.coords.longitude);


  // Creando un nuevo objeto para el uso de valores de latitud y longitud con Google map
  var latLng = new google.maps.LatLng(latitude, longitude);

  var div = $('#location');
  div.html = 'Estas aqui: Latitud:' + latitude + ', Longitude: ' + longitude;

  initMap(latLng);
  createMarker(latLng);
}

function initMap(latLng) {
  //Creando instancia de mapa y asignando al elemento 'map' HTML para renderizarlo.
   map = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: 5
  });
}

function createMarker(latLng, latitude, longitude) {
  var markerOptions = {
    position:latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: '¡Estoy Aqui!',
    icon: 'img/person2.png'
  }
  var marker = new google.maps.Marker(markerOptions);
  var latLng = new google.maps.LatLng(latitude, longitude);
    
    
    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude + 0.002, longitude),
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: 'taxi lyft',
    icon: 'img/coche2x.png'});
        
   
    var location2 = {latitude, longitude};
    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude + 0.002, longitude),
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: 'taxi lyft',
    icon: 'img/coche3x.png'});
    
    var location3 = {lat: -16.460787, lng: -71.528755};
    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude + 0.002, longitude),
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: 'taxi lyft',
    icon: 'img/coche4x.png'});
    
    var location4 = {lat: -16.455830 , lng: -71.538262};
    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude + 0.002, longitude),
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: 'taxi lyft',
    icon: 'img/coche5x.png'});
    
    var location5 = {lat: -16.456036 , lng: -71.520023};
    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude + 0.002, longitude),
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: 'taxi lyft',
    icon: 'img/coche6x.png'});

  var content = 'Estas aqui: ' + latLng.lat() + ', ' + latLng.lng();
  addInfoWindow(marker, latLng, content);
}

function addInfoWindow(marker, latLng, content) {
  var infoWindowOptions = {
    content: content,
    position: latLng
  };

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map);
  });
}

function requestEstimate(_data){
    $.ajax({
        url:"https://clientes.geekadvice.pe/api/estimado",
        data:{tipo:1}
    }).success(function(){
        console.log(_data);
        update(_data);
    });
}

function update(_info){
    alert(_info.destino);
    alert(_info.estimado.min);
}

