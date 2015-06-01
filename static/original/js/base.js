// fade
$(document).ready(function(){
	$("body").fadeIn("300");
})

// slideshow
count = 0;
title = new Array();
title[0] = '<h2 style="font-size:20px;"><i>Making great first impressions</i><h2>';
title[1] = '<h2 style="font-size:20px;"><i>Bringing you excellence</i><h2>';
title[2] = '<h2 style="font-size:20px;"><i>Quality, service & dependability</i><h2>';

function slideSwitch() {
    count++;
    var $active = $('#slideshow IMG.active');
    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');
    var $next =  $active.next().length ? $active.next() : $('#slideshow IMG:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 900, function() {
        $active.removeClass('active last-active');
    });
    if (count == 3) count = 0;
    $("#tag_title").fadeOut(500,function(){
        $(this).html(title[count])
    }).fadeIn(500);
}

$(function() {
    $("#tag_title").fadeOut(500,function(){
        $(this).html(title[0])
    }).fadeIn(500);
    setInterval( "slideSwitch()", 5000 );
});
