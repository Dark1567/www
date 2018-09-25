var icons =$('.social-icon'),
	styles ={
		position:'relative',
		background:'yellow',
		color:'black',
		zIndex:10
	},
	settings ={top:1000},
	speed =2000;

//	icons.css(styles).animate(settings,speed);

// prvý zapis vytiahnutie post title klinutie na postitle nam vyskoči alert z textom ktorý sa nachadza v .post-title
	/*
	$('.post-title').on('click',function(){
			alert($('.post-title').text());
	});
*/
/*
//vytvorenie funkcie vyskocOkno
	function vyskocOkno(){
		alert($('.post-title').text());
	};
	// zavolanie našej funkcie na post-title

	$('.post-title').on('click', vyskocOkno);
	*/

icons.css(styles); // tieto styly sa priradi hned po načitaní stránky
/*
icons.on('mouseenter',function(){
	icons.animate(settings, speed);
});
*/
icons.on('mouseenter',function(){
	$(this).animate(settings,speed);
});