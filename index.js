$(function() {
	$(document).scroll(function() {
		var windowHeight = $(window).height(); //获取浏览器窗口高度
		var documentHeight = $(document).height(); //获取文档高度
		var documenTop = $(document).scrollTop(); //获取文档高度
		console.log($("body").scrollTop() > 10)
		if($("body").scrollTop() > 10) {
			if(!$("#tf-menu").hasClass("nav_fixed")) {
				$("#tf-menu").addClass("nav_fixed")
			}
		} else {
			if($("#tf-menu").hasClass("nav_fixed")) {
				$("#tf-menu").removeClass("nav_fixed")
			}
		}
		//		console.log((windowHeight - documentHeight) + documenTop)
		//		if(((windowHeight - documentHeight) + documenTop) >-100) {
		//			xiaLa()
		//			return;
		//		}
	});
})
$(function() {
	$('a[href*=#],area[href*=#]').click(function() {
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({
						scrollTop: targetOffset
					},
					700);
				return false;
			}
		}
	});
})