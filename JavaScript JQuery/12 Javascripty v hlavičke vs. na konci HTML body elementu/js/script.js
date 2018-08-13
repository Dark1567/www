var socialIcon =$('.social-icon'),
	siteHeight =$('body').height();// človek si povie že ked  na body použijem metodu css konkretne vytiahnem informacie pomcou getter pre  height tak mi to hodi vyšku stranky
socialIcon.css({
	position:'relative',
	color:'black',
	background:'yellow',
	zIndex: 10
});
socialIcon.on('mouseenter',function(){
	$(this).animate({top:siteHeight},2000).fadeOut();
});