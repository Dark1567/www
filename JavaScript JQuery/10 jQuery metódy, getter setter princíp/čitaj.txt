
$('.social-icon').css({
	background:'yellow',
	color:'black'

});// zavolam na .social-icon metodu css a do nej vložim object (object sa piš do zložených zatvoriek kluč hodnota) z hodnotami ktore chcem upraviť chcem upravovať background na zelenu hodnota sa piše do uvodzoviek čo vec čo chcem meniť bez uvodoviek a ked cheme menit farbu pozadia a farbu textu tak  zapis sa odeluje čiarkou background:'yellow', color:'black'
//pred posledne sa čiarka nedáva
//######################################################
var obj ={
	background:'yellow',
	color:'red'
};
//vytvoriť si premenu obj v ktorej vytvorime objekt a dame tam nastavime farbu pozadia a farbu textu
$('.social-icon').css(obj);// zavoláme jquery na class .social-icon a do css metody pošleme premenu obj z ktorej sme spravili objekt z nastavenými hodnotami farby pozadia a farby textu
//#####################################################

$('.post-title').text();
// v tomto prípade je to getter pretože nam vypíše text z classu post-title
// #####################################################
 $('.post-title').text('raz dva tri');
//v tomto prípade je to setter pretože zmenim text ktorý bol v post-title na raz dva tri