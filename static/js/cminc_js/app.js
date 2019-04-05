var markers = [];

var mainAdImages = ["static/img/cminc_img/main_ads/ad_1.jpg",
                    "static/img/cminc_img/main_ads/ad_2.jpg"
];

var Location = function(data) {
  this.name = data.title;
  this.location = data.location;
  this.address = data.address;
  this.category = data.category;
  this.logo = data.logo;
};

function googleMapsFail() {
  alert('Google Maps could not be loaded at this time.');
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.525316, lng:-97.672594},
    zoom: 13,
    mapTypeControl: false
  });

  locations = locations;

  var imageBounds = {
          north: 30.58635,
          south: 30.461,
          east: -97.5809,
          west: -97.7683
        };

  roundRockOverlay = new google.maps.GroundOverlay(
    'static/img/cminc_img/round_rock_overlay_3.png', imageBounds);
    roundRockOverlay.setMap(map);

  function makeMarkerIcon(logo) {
    var markerImage = new google.maps.MarkerImage(logo);
    return markerImage;
  }

  var ViewModel = function() {
    var self = this;
    this.locationList = ko.observableArray();
    this.panelLocationList = ko.observableArray();
    this.locationName = ko.observable();
    this.locationAddress = ko.observable();
    this.locationLogo = ko.observable();
    this.locationMarkerIcon = ko.observable();
    this.showMainAd = ko.observable(true);
    this.mainAdSelection = ko.observable(mainAdImages[Math.floor(Math.random()*mainAdImages.length)]);

    this.zoomButtonStatus = ko.observable(false);

    this.categories = ko.observableArray([
      'All',
      'Medical',
      'Financial',
      'Food & Drink',
      'Lodging',
      'Religous',
      'Government',
      'Education',
      'Real Estate',
      'Retail',
      'Health & Wellness',
      'Service'
    ]);

    locations.forEach(function(locationInfo) {
      self.locationList.push(new Location(locationInfo));
      self.panelLocationList.push(new Location(locationInfo));
    });

    this.populateMarkers = function() {
      //self.locationName('');
      //self.locationAddress('');
      //self.locationLogo('');
      //self.sendAJAX();
      bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < locations.length; i++) {
        var position = locations[i].location;
        var title = locations[i].title;
        var address = locations[i].address;
        var logo = locations[i].logo;
        var markerIcon = locations[i].markerIcon;
        //Creating the marker.
        var marker = new google.maps.Marker({
          position: position,
          title: title,
          address: address,
          logo: logo,
          animation: null,
          icon: markerIcon,
          id: i
        });
        //Pushing all markers to the markers list and adding listeners.
        markers.push(marker);
        marker.addListener('click', function() {
          self.locationLogo(this.logo);
          self.locationName(this.title);
          self.locationAddress(this.address);
          //self.sendAJAX();
          self.zoomButtonStatus(true);
          //if (self.showHidePanelText() != 'Show Panels') {
          //  self.showHideInfoPanel(true);
          //}
          for (var i = 0; i < markers.length; i++) {
            markers[i].setAnimation(null);
          }
          this.setAnimation(google.maps.Animation.BOUNCE);
          //self.populateInfoWindow(this, mainInfoWindow);
          //marker.addListener('mouseover', function() {
          //  this.setIcon(makeMarkerIcon(this.markerIcon));
          //});
          //marker.addListener('mouseout', function() {
          //  this.setIcon(makeMarkerIcon(this.markerIcon));
          //});
        });
      }
      for (var j = 0; j < markers.length; j++) {
        markers[j].setAnimation(google.maps.Animation.DROP);
        markers[j].setMap(map);
        //bounds.extend(markers[j].position);
      }
      //map.fitBounds(bounds);
    };

    this.launchMap = function() {
      self.showMainAd(false);
      self.populateMarkers();
    }
  };
  ko.applyBindings(new ViewModel());
}
