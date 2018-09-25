(function($){
list =$('.jokes'),
copy =$('.copy');
// skryjeme elementy

copy.before($('<h1> JA MAM NAJVAČŠÍ HEADING</h1>')); // prida h1 pred copy element
//copy.after($('<h1> JA MAM TIEŽ NAJVAČŠÍ HEADING</h1>'));// prida h1 za copy element
$('<h1> ja mam najvačši ...heading</h1>').insertAfter('.copy');
$('<h3>ja nemám až tak veľký</h3>').appendTo('body');
$('<h3>ja nemám až tak veľký 2</h3>').prependTo('#content');
list.find('dd').slideUp();
//zobraziť dd clicknutim na term
list.find('dt').on('click', function(event){
	var dt =$(this), // do premenej dt si odchytime na to čo klikame čiže dt
		dd = dt.next();// v premenej dd si odchytime na to čo sme klikli čiže jeho nasledujuci element čiže dd

		dd.slideToggle()
		.siblings('dd').slideUp();

		var newContent = dt.text() + dd.html();
		copy.prepend( newContent + '<hr>' );

	event.preventDefault();
});
//metoda is();
 var ul =$('.list');
 ul.find('li').on('click',function(){

	copy.text($(this).is('li:eq(2)'));//tento zapis znamena
// že do .copy vypiš true ak sa jedna o element li z indexom 2 čiže je treti v poradi
 });
 // v ramci premenej ul najdem všetky li elementy
 // nato naviažem metodu on(); po kliknuti na niektorých z nich
 // zavolám funkciu

})(jQuery);

/*


 */

