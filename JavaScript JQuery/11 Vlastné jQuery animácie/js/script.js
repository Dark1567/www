/*

$('.social-icon').css({
	position:'relative',
	background:'yellow',
	zIndex:10 //css hodnoty properties sa pišu v js jquery v tzv camlcake čiže každe dalšie slovo začina veľký písmenom
});

$('.social-icon').animate({top:1000},2000);
*/
// ABY JS NEMUSEL DVA KRAT VYHLADAVAT .social-icon
// tak zapis bude vyzerať takto
/*
var icons =$('.social-icon');
icons.css({
	position:'relative',
	background:'yellow',
	zIndex:10 //css hodnoty properties sa pišu v js jquery v tzv camlcake čiže každe dalšie slovo začina veľký písmenom
});

icons.animate({top:1000},2000);
*/
// najziednodušnejši najmenj textový zápis
var icons =$('.social-icon'),
	styles = {
	position:'relative',
	background:'yellow',
	zIndex:10
},
settings={ top:1000},
speed=2000;

icons.css(styles).animate(settings,speed);