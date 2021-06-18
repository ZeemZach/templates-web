// ************ Loader ***********
$(window).on('load',function() {
  setTimeout(function() {
    $(".loader").fadeOut();
  }, 4000);
});
// ***********  top button *************
$(function() {
  
    var btn = $('#scrollTop');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.css('display','block');
      } else {
        btn.css('display','none');
      }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '600');
    });
    
});

// ************** Counter up ************
$('.count').counterUp({
    delay: 10,
    time: 800    
});