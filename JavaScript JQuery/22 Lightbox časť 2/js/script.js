(function($){
// nastavuješ tu opacity po prejdeny myšy po obrazkoch
var gallery =$('.gallery'),
	startingOpacity = gallery.find('img').css('opacity');

gallery.find('img').on('mouseenter mouseleave', function(event){

	var opacity = event.type =='mouseenter'? 1: 0.5; //tomtuo sa hovri ternarný operátor

$(this).stop().fadeTo(200, opacity);

});
/*LIGHTBOX*/

 var overllay = $('<div />', {id:'overllay', });// tu sme zariadil že jquery vytvori div otvaraci a uzatvaraci tag a ako druhy argument sme dali do zobačikových zatvriek aby mal ten div id z nazvom overllay
 overllay.appendTo('body').hide();

 // po klinuti na obrazok
gallery.find('a').on('click', function(event){

	var href = $(this).attr('href'),
		image = $('<img>', {src:href });

	overllay.html(image).show();
	event.preventDefault();
});
overllay.on('click', function(){
	overllay.hide();
});
$(document).on('keyup', function(event){
	if(event.which === 27){
		overllay.hide();
	}
	// console.log( event.which );
});

})(jQuery);
/*keyup = udalost nastane vtedy ked tlačitko bude zdvihnuté
čiže keď ho pustím

keydown = udalost nastane vtedy ked  tlačitko zatlačím
keypress = udalost nastane keď tlačitko stale držím stlačene*/