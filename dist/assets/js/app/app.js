$(document).ready(function(){var n=$("#main_menu ul > li > .children");if($(n).hover(function(){$(this).parent().addClass("current_page_item")},function(){$(this).parent().removeClass("current_page_item")}),$(".adbtn").each(function(){""==$(this).attr("href")&&$(this).hide().remove()}),$(".ngg-gallery-thumbnail-box").length&&($(".ngg-gallery-thumbnail-box").each(function(n){$(this).find(".ngg-gallery-thumbnail a img").attr("title");$(this).find(".ngg-gallery-thumbnail a").append("<span>Kliknij, aby powiększyć</span>")}),$(".ngg-gallery-thumbnail-box:odd").addClass("no-mr")),$(".ngg-navigation").length){var a=$(".ngg-navigation").html();$(".ngg-galleryoverview").prepend('<div class="ngg-navigation_top">'+a+"</div>")}$(".ngg-gallery-thumbnail a").fancybox(),$("#narrow_column .current_page_item").children("ul").show(),$("#map").length&&$("#map").jMapping({force_zoom_level:15,default_zoom_level:15})});