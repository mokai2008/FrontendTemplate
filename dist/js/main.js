// toggle sidebar

$('.toggle-sidebar').on('click', function() {
  $('.sidebar, .content-area').toggleClass('no-sidebar')
})


// toggle submenu

$('.toggle-submenu').on('click', function() {
  $(this).toggleClass('fa-angle-right fa-angle-down');
  $(this).parent('a').next('.child-links').slideToggle()
})

// toggle fullscreen

$('.toggle-fullscreen').on('click', function() {
  $(this).toggleClass('full-screen');
  if($(this).hasClass('full-screen')) {
    if(document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    }
  } else {
    if(document.documentElement.exitFullscreen) {
      document.documentElement.exitFullscreen();
    }
  }
});

