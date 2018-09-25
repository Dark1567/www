(function($){
var gallery =$('.gallery'),
	startingOpacity = gallery.find('img').css('opacity');

gallery.find('img').on('mouseenter mouseleave', function(event){

	var opacity = event.type =='mouseenter'? 1: 0.5; //tomtuo sa hovri ternarný operátor

$(this).stop().fadeTo(200, opacity);

});
 var overllay = $('<div />', {id:'overllay', });// tu sme zariadil že jquery vytvori div otvaraci a uzatvaraci tag a ako druhy argument sme dali do zobačikových zatvriek aby mal ten div id z nazvom overllay
 overllay.appendTo('body').hide()
gallery.find('a').on('click', function(event){
	overllay.show();// nechame ho zobraziť po kliknuti
	event.preventDefault();
});
overllay.on('click', function(){
	overllay.hide();
});
})(jQuery);