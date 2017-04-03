var menuSticky = function(){
	var menu = $("img").offset().top;
	$(window).scroll(function(){
		if( $(this).scrollTop() >= menu) {
			$("h1").addClass('fixed');
		}else {
			$("h1").removeClass('fixed');
		}
	});
console.log("corre");

};
menuSticky();

var altura = function(){
	var elem1 = $(".col-md-4").innerHeight() + $(".col-md-4").offset().top;
	var scroll = $(window).scrollTop();
	if (elem1-scroll <= 640){
		$(".col-md-3").css({"background":"teal"});
	} else {
		$(".col-md-3").css({"background":"transparent"});
	}

	console.log("altura del elem"+elem1);
	console.log("altura del scroll"+scroll);
	console.log(elem1-scroll); 
	if (scroll===6176){
		clearInterval(stop);
	} 
};

// var stop = setInterval(altura, 1000);

// altura();





// $(".col-md-4").stick_in_parent();
// $(".col-md-5, .col-md-4").stick_in_parent();
// $(".col-md-4").stick_in_parent();
// $(".col-md-3").stick_in_parent();
