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

// $(".col-md-4").stick_in_parent();
// $(".col-md-5, .col-md-4").stick_in_parent();
$(".col-md-4").stick_in_parent();
$(".col-md-3").stick_in_parent();
