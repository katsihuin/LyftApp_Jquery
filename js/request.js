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
