$(document).ready(init);

var map;

function init() {
  getMyLocation();
}

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation, geoError);
  } else {
    alert('Sin soporte de geolocalización');
  }
}

//función invoca asincrónicamente por la API de geolocalización HTML5
function displayLocation(position) {

  //Valores de latitud y longitud obtenidos de HTML5 API
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Creando un nuevo objeto para el uso de valores de latitud y longitud con Google map
  var latLng = new google.maps.LatLng(latitude, longitude);

  initMap(latLng);
  createMarker(position);
}

//función Error
function geoError() {
    alert("Geocoder failed.");
}

function initMap(latLng) {
  //Creando instancia de mapa y asignando al elemento 'map' HTML para renderizarlo.
   map = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: 15
  });
}

function getAddress(geocoder, location, coords) {
  var latlng = location;
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      
      if (results[0]) {
        //dirección formateada
        $('#'+coords).html(results[0].formatted_address);
        var address = results[0].formatted_address;
      } else {
        window.alert('No se encontro ningún resultado');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}

function createMarker(position) {
  map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
  currentMarker = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    map: map,
    title:"Aqui estoy!!!",
    icon: "img/person2.png"
  });
  
  var markerOptions = {
    //position:latLng,
    map: map,
    animation: google.maps.Animation.DROP,
    clickable: true,
    title: '¡Estoy Aqui!',
    icon: 'img/person2.png'
  }
  //var marker = new google.maps.Marker(markerOptions);

  var marker = new google.maps.Marker({
  //position: new google.maps.LatLng(latitude + 0.002, longitude),
  map: map,
  animation: google.maps.Animation.DROP,
  clickable: true,
  title: 'taxi lyft',
  icon: 'img/coche2x.png'});

  var marker = new google.maps.Marker({
 // position: new google.maps.LatLng(latitude + 0.002, longitude),
  map: map,
  animation: google.maps.Animation.DROP,
  clickable: true,
  title: 'taxi lyft',
  icon: 'img/coche3x.png'});
  
  var location3 = {lat: -16.460787, lng: -71.528755};
  var marker = new google.maps.Marker({
  //position: new google.maps.LatLng(latitude + 0.002, longitude),
  map: map,
  animation: google.maps.Animation.DROP,
  clickable: true,
  title: 'taxi lyft',
  icon: 'img/coche4x.png'});
  
  var location4 = {lat: -16.455830 , lng: -71.538262};
  var marker = new google.maps.Marker({
 //position: new google.maps.LatLng(latitude + 0.002, longitude),
  map: map,
  animation: google.maps.Animation.DROP,
  clickable: true,
  title: 'taxi lyft',
  icon: 'img/coche5x.png'});
  
  var location5 = {lat: -16.456036 , lng: -71.520023};
  var marker = new google.maps.Marker({
  //position: new google.maps.LatLng(latitude + 0.002, longitude),
  map: map,
  animation: google.maps.Animation.DROP,
  clickable: true,
  title: 'taxi lyft',
  icon: 'img/coche6x.png'});

  var geocoder = new google.maps.Geocoder();
  getAddress(geocoder, currentMarker.position,'direccion');
}
