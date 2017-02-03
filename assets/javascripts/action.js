$(document).ready(function () {

  $(document).tooltip();

  // scroll links menu
  $(".scroll-link").click(function () {
    var ScrollOffset = $(this).attr('data-soffset');
    //alert(ScrollOffset);
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - ScrollOffset + "px"
    }, {
      duration: 800,
      easing: "easeInOutCubic"
    });
    return false;
  });

  // Close Menu on Responsive
  $(document).on('click', function (e) {
    if (e.target.id != 'main-menu' && e.target.id != 'sidebartoggle') {
      $('#sidebartoggle').removeAttr('checked');
    }
  });


  $(".tooltip").click(function () {
    $('.modalDialog').show();
    $('#' + $(this).data('attr')).show();
    return false;
  });

  $(".close").click(function () {
    $('.information').hide();
    $('.modalDialog').hide();
  });

});