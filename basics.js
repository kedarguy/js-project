$(document).ready(function(){




$('#wraper').append(function(){
	
	var sqNum=16;

	sqNum = sqNum*sqNum;

	for (var i=1; i<=sqNum;i=i+1) {
 $('#wraper').append('<div class="box"></div>');

	}

});

$('.box').height("33");
$('.box').width('33');

$('.box').hover(function(){

	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

	$(this).css('background-color',hue);
});

$('#button').click(function(){

$('.box').css('background-color','blue')

var $x=1;

$('#wraper').empty();

	var newsqNum=prompt("Please enter number of Squars per row");

sqNum = newsqNum*newsqNum;

	for (var i=1; i<=sqNum;i=i+1) {
 $('#wraper').append('<div class="box"></div>');

	}	

$('.box').hover(function(){

	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

	$(this).css('background-color',hue);

});

var boxH=560/newsqNum-2;
var boxW=560/newsqNum-2;
$('.box').height(boxH);
$('.box').width(boxW);

});




});

