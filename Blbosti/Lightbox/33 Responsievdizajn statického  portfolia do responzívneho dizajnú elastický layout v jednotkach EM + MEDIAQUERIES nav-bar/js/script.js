(function($){
var gallery =$('.gallery'),
	startingOpacity = gallery.find('img').css('opacity');
	gallery.find('img').on('mouseenter mouseleave', function(event){
		var opacity;
		// console.log(event.type);
		if(event.type ==='mouseenter'){
			opacity = 1;
		}else{
			opacity = 0.5;
		}
		$(this).stop().fadeTo(200,opacity); // stop(); metoda zariadi aby sa animacia fadeTo neopakovala
		// vytvrenie divu z id overlay

	});
		 var overlay = $('<div/>',{id:'overlay'});
		 overlay.appendTo('body').hide();

		 gallery.find('a').on('click', function(event){
		 	overlay.show(); // Po kliknuti v gallery na a element zobraz overlay
		 	var href =$(this).attr('href'),
		 		image =$('<img>',{src:href});
		 		overlay.html(image).show()
		 	event.preventDefault();
		 });

		 //po kliknuti na overlay sa overlay skryje
		 overlay.on('click', function(event){
		 	overlay.hide();
		 });

		 // zrušenie overlayy resp.lightboxu pomcou tlačitka esc
		 $(document).on('keyup', function(event){
		 	if(event.which === 27){
		 		overlay.hide();
		 	}
		 });
})(jQuery);