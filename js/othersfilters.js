$(document).ready(function() {
    $('.accordion-header').click(function() {
      // Toggle content visibility
      $(this).next('.accordion-box').slideToggle();
  
      // Toggle +/- icon
      const icon = $(this).find('.toggle-icon');
      icon.text(icon.text() === '+' ? '-' : '+');
  
      // Close other accordion items
      $('.accordion-box').not($(this).next('.accordion-box')).slideUp();
      $('.toggle-icon').not(icon).text('+');
    });
  });