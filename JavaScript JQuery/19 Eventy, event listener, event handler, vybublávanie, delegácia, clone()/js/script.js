(function($){
list =$('.jokes'),
copy =$('.copy');
// skryjeme elementy

list.find('dd').slideUp();
//zobraziť dd clicknutim na term
list.find('dt').on('click', function(event){

var dt = $(this),
	dd =$(this).next();

	dd.slideToggle().siblings('dd').slideUp();

	var newContent = dt.text() + dd.html();

	copy.prepend(newContent +'<hr>');

	//clonovanie
		dt.add(dd).clone(true).hide().css({backgroundColor:'#bada55'}).fadeIn().prependTo( list );


});

 var ul =$('.list');
 ul.on('click','li',function(){
 	ul.append('<li>JA SOM TU NOVÝ!!!</li>');
 });


})(jQuery);

