$(document).on('ready', init);

function init(){
	$('#btnPickUp').on('click', nextPage);
	$('#btn-goBack').on('click', goBack);
	$(".list-car .list").on('mouseover', onMouseOver);
    $(".list-car .list").on('mouseleave', onMouseLeave);
    $(".dropdown-menu li a").on('click', displayChange);
    addClickEvent();
}

function goBack(){
	$('#requestLyft').hide();
  	$('#setPickUp').show();
}

function nextPage(){
    $('#setPickUp').hide();
    $('#requestLyft').show();
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
	$.each(list, function() {$(this).on('click',onClick)});
}

function onClick(event){
	var imgTaxi= $(event.currentTarget).find('.imgTaxi').attr('src');
	localStorage.setItem('srcImgTaxi', imgTaxi);

	var name= $(event.currentTarget).find('#type').text();
	localStorage.setItem('nameCar',name);

	if(name=='Line')
    {
    	localStorage.setItem('type',1); 
    }
	if(name=='Lyft')
    {
    	localStorage.setItem('type',2); 
    }
    if(name=='Plus')
    {
    	localStorage.setItem('type',3); 
    }
    if(name=='Premier')
    {
    	localStorage.setItem('type',4); 
    }
}

function displayChange(){
	var TheImage = localStorage.getItem('srcImgTaxi');
	$('#dropdownMenu2').hide();
	$('#taxiType').show();
	$('#taxiType').css({ 'background-image': "url(" + TheImage + ")"});
}	