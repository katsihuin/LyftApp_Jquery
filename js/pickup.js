$(document).on('ready', init);
var chooseCar = false;

function init(){
	$('#btnPickUp').on('click', nextPage);
	$('#btn-goBack').on('click', goBack);
	$(".list-car .list").on('mouseover', onMouseOver);
    $(".list-car .list").on('mouseleave', onMouseLeave);
    $(".dropdown-menu li a").on('click', displayChange);
    addClickEvent();
}

function onMouseOver() {
	$(this).addClass("active");
    $(this).addClass("purple");
}

function onMouseLeave() {
	$(this).removeClass("active");
    $(this).removeClass("purple");
}

function addClickEvent(){
	var list = $('.list');
	$.each(list, function() {$(this).on('click',onClickList)});
}

function onClickList(event){
	
	var imgTaxi= $(event.currentTarget).find('.imgTaxi').attr('src');
	localStorage.setItem('srcImgTaxi', imgTaxi);


	var name= $(event.currentTarget).find('#type').text();
	localStorage.setItem('nameCar',name);
	
	if(name=='Line')
    {
    	localStorage.setItem('type',1); 
    	chooseCar = true;
    }
	if(name=='Lyft')
    {
    	localStorage.setItem('type',2); 
    	chooseCar = true;
    }
    if(name=='Plus')
    {
    	localStorage.setItem('type',3);
    	chooseCar = true;
    }
    if(name=='Premier')
    {
    	localStorage.setItem('type',4);
    	chooseCar = true;
    }
}

function displayChange(){
	var TheImage = localStorage.getItem('srcImgTaxi');
	$('#dropdownMenu2').hide();
	$('#taxiType').show();
	$('#taxiType').css({ 'background-image': "url(" + TheImage + ")"});
}	

function goBack(){
	$('#requestLyft').hide();
  	$('#setPickUp').show();
}

function nextPage(){
	if (chooseCar == false){
		alert("escoge por favor un tipo de vehículo");
	}else{
		$('#setPickUp').hide();
    	$('#requestLyft').show();
	}
}