jQuery(function() {
  jQuery('.showSingle').click(function() {
    jQuery('.targetDiv').fadeOut(400);
    jQuery('#div' + $(this).attr('target')).delay(400).fadeIn(400);
  });
});