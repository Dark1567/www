(function($){
var gallery =$('.gallery'),
	startingOpacity = gallery.find('img').css('opacity');

gallery.find('img').on('mouseenter mouseleave', function(event){

	var opacity = event.type =='mouseenter'? 1: 0.5; //tomtuo sa hovri ternarný operátor

$(this).stop().fadeTo(200, opacity);


});
})(jQuery);