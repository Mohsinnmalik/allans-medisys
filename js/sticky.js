// Clean & robust sticky header handler
$(document).ready(function() {
  'use strict';

  function handleStickyNavbar() {
    var scroll = $(window).scrollTop();
    var headerStripHeight = $('.headtoppart').outerHeight() || 40;

    if (scroll > headerStripHeight) {
      $('.wsmainfull').addClass('is-sticky');
      $('.header').addClass('header-sticky');
    } else {
      $('.wsmainfull').removeClass('is-sticky');
      $('.header').removeClass('header-sticky');
    }
  }

  $(window).on('scroll load resize', handleStickyNavbar);
  handleStickyNavbar();
});