$(document).ready(function(){




$('#wraper').append(function(){
	
	var sqNum=16;

	sqNum = sqNum*sqNum;

	for (var i=1; i<=sqNum;i=i+1) {
 $('#wraper').append('<div class="box"></div>');

	}

	



});

$('.box').hover(function(){

	$(this).css('background-color','yellow');
});

$('#button').click(function(){

$('.box').css('background-color','blue')

$('#wraper').empty();

	var newsqNum=prompt("Please enter number of Squars per row");


sqNum = newsqNum*newsqNum;

	for (var i=1; i<=sqNum;i=i+1) {
 $('#wraper').append('<div class="box"></div>');

	}

	

	$('.box').css('height','l1');
	

$('.box').hover(function(){

	$(this).css('background-color','yellow');
});
});



});

