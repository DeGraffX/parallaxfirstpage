// My Scripts //



$(document).scroll(function(){
	console.log( $(document).scrollTop() );

     $("#treeline").css( "left", String( $(document).scrollTop() -70 ) + "px" );
     $("#closeclouds").css( "left", String( $(document).scrollTop() * .5 ) + "px" );
     $("#mountains01").css("left", String( $(document).scrollTop() * .2 ) + "px");
     $("#middleclouds").css("left", String( $(document).scrollTop() * .1 ) + "px");
     $("#farclouds").css("left", String( $(document).scrollTop() * .05 ) + "px");
     // $("#skyBG4000").css("left", String( $(document).scrollTop() 0 ) + "px");
});



$(document).mousemove(function(p){
	console.log(p.pageX +", " + p.pageY); 
	 $("#treeline").css("left", String(p.pageX +", " + p.pageY -70) + "px");
     $("#closeclouds").css("left", String(p.pageX +", " + p.pageY * .5) + "px");
     // $("#mountains01").css("left", String(p.pageX +", " + p.pageY * .2 + "px");
     $("#middleclouds").css("left", String(p.pageX +", " + p.pageY * .1) + "px");
     $("#farclouds").css("left", String(p.pageX +", " + p.pageY * .05) + "px");
     // $("#skyBG4000").css("left", String(p.pageX +", " + p.pageY 0) + "px");
});


