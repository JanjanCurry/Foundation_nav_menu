$(document).foundation();
$(document).ready(function(){
  console.log('asd');
  $('.tabs-title').on("mouseover", function() {
      var $this = this;
      var tab_id = $($this).find('a').attr('href');
      console.log(tab_id);
      //$(".tabs-content .tabs-panel").siblings().hide();
      $(".tabs-content .tabs-panel").siblings().hide();
      $(".tabs-content .tabs-panel"+tab_id).show();
  });
  $('.dropdown .parent-menu').on('mouseover', function(){
    console.log('xx');
    var _id = $(this).data('id');
    $(".tabs-content .tabs-panel").hide();
    $(".tabs-content .parent-"+_id).show();
  });
});
