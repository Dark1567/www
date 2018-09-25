(function($){
list =$('.jokes');

list.find('dd').hide();//čiže bude hladat vo classe joke metóda find najde všetky dd elementy a pomcou metody hide ich skryje

list.find('dt').on('click', function(event){
	console.log(event);
	$(this).next().slideDown().siblings('dd').slideUp(); // čiže v triede jokes pomcou metodi find najdeme všetky dt elementy a pomocou metody on udlosti 'click'  spustime funkcu na to čo klikneme v zozname jokes pmocou metody next najde nasledujuci html  element a na to použijeme metodu  slideDown ktora  vysune  dd element na to piužijeme dalšiu metodu najdi dalšich surodencov siblings('dd') a na ten čo sme klikli sprav slideDown() na ostatne dd sprav slideUp() čiže vysunuty ostane len jeden joke
});
list.find('a').on('click', function( event ){
	event.preventDefault();
});
})(jQuery);

/*


 */

