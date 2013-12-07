$(function() {

  var hash = window.location.hash;

  if(hash) {
    $('.generic').hide()
    $(hash.replace('#', '')).show()
  }

  $('.navbar-sticky').sticky({topSpacing: 0})

  $parallaxBackground = $('*[data-type="parallax-background"]')
  $parallaxText = $('*[data-type="parallax-text"]')

  $parallaxText.each(function() {
    $(this).data('padding-top', +$(this).css('padding-top').replace('px', ''))
  })

  function handleScroll () {
    $parallaxBackground.each(function() {
      ypos = $(window).scrollTop() / $(this).data('speed')
      $(this).css({backgroundPosition: '0px ' + ypos + 'px'})
    })
    $parallaxText.each(function() {
      ypos =  ($(window).scrollTop() / $(this).data('speed')) + $(this).data('padding-top')
      $(this).css({paddingTop: ypos + 'px'})
    })
  }

  $(window).scroll(handleScroll)
  $(window).on('touchmove', handleScroll)

  var $body = $('body')
  $('a').click(function() {
    $target = $(this.hash)
    console.log($target.offset().top)
    $body.stop().animate({
      scrollTop: $target.offset().top
    }, 500)
    return false
  })

})
