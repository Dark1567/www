(function($){
var gallery = $('.gallery'),
	StartingOpacity = gallery.find('img').css('opacity');

	gallery.find('img').on('mouseenter mouseleave',function(event){
	 var opacity;
	 if(event.type =='mouseenter'){
	 	opacity = 1;
	 }
	 else{
	 	opacity= 0.5;

	 }
	 $(this).stop().fadeTo(200, opacity);
	});
	//vytvorenie div s classom overlay
var overlay =$('<div />',{id:'overlay'});
overlay.appendTo('body').hide();

gallery.find('a').on('click', function(event){

		var	 href =$(this).attr('href'),
			 image = $('<img>',{src:href});

		overlay.html(image).show();

		event.preventDefault();
});
overlay.on('click',function(event){
		overlay.hide();
});
$(document).on('keyup', function(event){
	if(event.which ===27){
		overlay.hide();
	}
});
})(jQuery);