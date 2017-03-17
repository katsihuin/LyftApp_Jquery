$(document).on('ready', init);

function init(){
     resquestRide();
   }

function requestRide(){
   $.ajax({
       url:"https://clientes.geekadvice.pe/api/carrera",
       data:{"tipo":type}
   }).success(function(_data){
       updateRideInfo(_data);
   });
}

function updateRideInfo(_info){
   $('#driverPhoto').attr('src',_info.conductor.url);
   $('#driverName').html(_info.conductor.name);
   $('#finalPrice').text(_info.estimado.moneda+_info.final);  
}


/*var min = localStorage.getItem('minPrice');
  var max = localStorage.getItem('maxPrice');*/