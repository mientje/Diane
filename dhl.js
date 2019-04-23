$(document).ready(function(){
  $('.nav-link').on('click', collapseMenu)
})

function collapseMenu(){
   $('button.navbar-toggle').click();
}


function initMap() {
  // The location of DHL
  var dhl = {lat: 51.211916, lng: 4.400809};
  // The map, centered at DHL
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: dhl});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: dhl, map: map});
}
