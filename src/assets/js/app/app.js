$(document).ready(function() {
    $(".ngg-gallery-thumbnail a").fancybox();
    $('#narrow_column .current_page_item').children('ul').show();
});

function initMap() {
    var uluru = {lat: 50.2444688, lng: 19.0800289};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}