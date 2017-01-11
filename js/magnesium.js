$(function(){
  var goto_top_btn = $("a#rewind");
  goto_top_btn.fadeOut(800);
  $(window).scroll(function () {
    if ($(this).scrollTop() > 320) {
      goto_top_btn.fadeIn();
    }
    else {
      goto_top_btn.fadeOut();
    }
  });
	goto_top_btn.on('click', function () {
		$('html,body').animate({ scrollTop: 0 }, 600);
		return false;
	});
})
