$(document).ready(function() {
    $('input.submit').click(function() {
      $('form#contact-form').attr(
        'action',
        'mailto:seooracle6@gmail.com');
      $('form#contact-form').submit();
    });
  });