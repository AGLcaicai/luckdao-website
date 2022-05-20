$(document).ready(function(){
    $('#navbar a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 65)
            }, 700);
            return false;
          }
        }
    });

    $("#navbar li a").click(function(){
        $("#navbarSupportedContent").removeClass("show");
    });

    $(document).on("scroll", onScroll);

    getHeight()
    $(window ).resize(function() {
      getHeight();
    });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.nav-link').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top - 90 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav-link').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}

function getHeight(){
  var h1 = $('.lucky-paper-page #header').height();
  var h = $(window).height() - h1;
  $('.main-banner.lucky-paper .thumb-img').css("height", h);
}
