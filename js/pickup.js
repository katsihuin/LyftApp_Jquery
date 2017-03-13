$(document).on('ready', init);


function init() {
	$('#lineTaxi').on('click', displayChange);
	$('#btnPickUp').on('click', nextPage);
	$(".list-car .list").mouseover(function(){
            $(this).addClass("active");
            $(this).addClass("purple");
        });
    $(".list-car .list").mouseleave(function(){
            $(this).removeClass("active");
            $(this).removeClass("purple");
    });	
}


function displayChange(){
    $('#dropdownMenu2').hide();
    $('#taxiType').show();
}

function nextPage(){
    $('#setPickUp').hide();
    $('#requestLyft').show();
}

function addClickEvent()
{
	var list = $('.list');
	$.each(list, function() {$(this).on('click',onClick)});
}

function onClick(event)
{
	var imgTaxi= $(event.currentTarget).find('.imgTaxi').attr('src');
	localStorage.setItem('srcImgTaxi', imgTaxi);

	var name= $(event.currentTarget).find('a').text();
	localStorage.setItem('nameCar',name);

	var taxi = $('a').text();

	switch(taxi)
	{
		case 1:
			setObjectLocalStorage('type','1'); 
			break;
		case 2:
			setObjectLocalStorage('type','2'); 
			break;
		case 3:
			setObjectLocalStorage('type','3'); 
			break;
		case 4:
			setObjectLocalStorage('type','4'); 
			break;
	}
}
