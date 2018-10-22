
/*scrolovanie*/
(function($){


// vytiahneme si menu
var menu =$('.menu'),
// taktiež si z toho menu vytiahneme linky
	menuLinks = menu.find('a');

	menuLinks.on('click', function(event){
		//zamedzime defaultnej akcie a elemntom

		//console.log(this);

		// rozdiel medzi $(this) a this je ten že v provm pripade ked si to console lognem tak tam nenajdem hash hodnotu ale ket si console.log(this) lognem len this tak tam najdem hash hodnotu čiže ak si necham vypisať $(this.hash) tak to korenšponduje z console.log zápisom
		var id = this.hash;
		// scrolovanie
		$('body').animate({scrollTop: $(id).offset().top },1000 ,function(){ // callback function!!!

			//pridaj do adresi hash čiže nazov sekcie na ktorej sa nachadtame
			//
		window.location.hash = id;
		// čiže pridanim funkcie sme zariadili callback funkciu čiže všetko čo je vtejto function sa spusti až po animaci
		// čiže hash sa pridá až po anímacíía
		// a možem si všimnuť že po zoscrolovani sa nam pridal hashtag undefined
		// upravíme to tak že si pred funkciou vytvoríme id premenu do ktorej uložime $(this.has); a tu id premenu použijeme v kode
		} );

		// čiže jquery zobere html a body element
		// animujeme scrollTop
		// $(this.hash) je ten element k torému sa chceme do animovať
		// viem že potrebujem jeho offset() konkretne z vrchu offset je hodnota na ktorej sa element nachadza
		// a chcem jeho top hodnotu čiže metoda offset().top
		// 1000 je čas kolko ma animacia trvať 1s





		//zabraň defaultnej akcií a elementu
		event.preventDefault();

	});
})(jQuery);