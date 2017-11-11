$(document).ready(function() {
  
 var childs = $('#main_menu ul > li > .children')
    $(childs).hover(
    function () {
      $(this).parent().addClass("current_page_item");
    },
    function () {
      $(this).parent().removeClass("current_page_item");
    }
    );
    
    $(".adbtn").each(function(){
      if($(this).attr('href')==""){
	$(this).hide().remove();
      }
    });
    
    
    if ($('.ngg-gallery-thumbnail-box').length) {

$('.ngg-gallery-thumbnail-box').each(function(index) {
	var nrnr = $(this).find('.ngg-gallery-thumbnail a img').attr('title')
	$(this).find('.ngg-gallery-thumbnail a').append('<span>Kliknij, aby powiększyć</span>');
});
  


$('.ngg-gallery-thumbnail-box:odd').addClass('no-mr');
}

if ($('.ngg-navigation').length) {
	var copycat = $('.ngg-navigation').html();
	$('.ngg-galleryoverview').prepend('<div class="ngg-navigation_top">'+copycat+'</div>');
}
    
    
    $(".ngg-gallery-thumbnail a").fancybox();
    

    $('#narrow_column .current_page_item').children('ul').show();
    
    
    if ($('#map').length) {
    $('#map').jMapping({

force_zoom_level: 15,

default_zoom_level: 15

});
    
    
    
    }

    
    
});
