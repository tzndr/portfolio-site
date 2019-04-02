// Error handling for Google Maps initialzation.
function googleMapsFail() {
  alert('Google Maps could not be loaded at this time.');
}

//Initializing the map and core map variables.
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.50922, lng: -97.677319},
    zoom: 12.2,
    mapTypeControl: false
  });

//Custom map overlay
  var imageBounds = {
          north: 30.58635,
          south: 30.461,
          east: -97.5809,
          west: -97.7683
        };

  roundRockOverlay = new google.maps.GroundOverlay(
    '../static/cminc_img/round_rock_overlay_3.png', imageBounds);
    roundRockOverlay.setMap(map);

  var ViewModel = function() {

  }
};
