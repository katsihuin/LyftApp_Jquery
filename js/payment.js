$(document).on('ready', init);

function init(){
     resquestDriver();
   }

function requestDriver(){
   $.ajax({
       url:"https://clientes.geekadvice.pe/api/carrera",
       data:{tipo:1}
   }).success(function(_data){
       updateProfile(_data);
   });
}

function updateProfile(_info){
   $('#profilePic').attr('src',_info.conductor.url);
   $('#nameDriver').html(_info.conductor.name);
   $('#price').text(_info.final);  
}