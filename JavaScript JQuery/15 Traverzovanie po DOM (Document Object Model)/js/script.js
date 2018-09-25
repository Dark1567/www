(function($){
list =$('.jokes');

list.find('dd').hide();//čiže bude hladat vo classe joke metóda find najde všetky dd elementy a pomcou metody hide ich skryje

list.find('dt').on('click', function(){
	$(this).next().slideToggle(); // čiže v triede jokes pomcou metodi find najdeme všetky dt elementy a pomocou metody on udlosti 'click'  spustime funkcu na to čo klikneme v zozname jokes pmocou metody next najde nasledujuci html  element a na to použijeme metodu  slideToggle ktora bud vysune alebo zasune dd element
});
/*
*/
})(jQuery);
/*
DALŠIE vhodené mtody pre traverzovanie
var list = $('.jokes');
####################
CHILDREN() METODA
####################
list.children();
// mi  najde každy jeden element ktory je potomok zoznamu list teda jokes na stranke
čiže našlo všetky dt a dd  elementy
#########################################################################################

#############################################################################
taktiež možeme najsť všetky deti ktore su dt čiže použijeme csskove selektory
##############################################################################
 list.children('dt');// najde všekty deti ktoré  v zozname ale iba dt
####################################################################
NAJDI VšETKY DETI DT A ZAROVEN JE TO PRVY METODA first();
###################################################################
list.children('dt').first();// teraz našiel absolútne iba prvý dt element
###############################################################################
####################################
taktiež možem pmcou css selektora dôležita dvojvotak pred css vlastnostou
##################################
list.children(':first-child');//urobi to iste ak metoda first() len sme použili css selektor

#######################################
METODA siblings();
#######################################
list.children(':first-child').siblings();// tato metoda najde všety dt dd okrem prveho dt lebo sme hladali jeho surodencov

#################################
hladanie rodičov pomcou metody parent(); a metoda parents();
#################################
list.parent();// zoznamu jokes je rodič container
list.parents();// zoznamu jokes su rodičia container main #content...

######################
METODA 	eq(2);
#######################
list.children().eq(2)// tento zapis znamena že v zozname jokes najde tretie dieta vpradi pretože programovanie ide od 0
 */
