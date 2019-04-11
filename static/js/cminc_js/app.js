function googleMapsFail() {
  alert('Google Maps could not be loaded at this time.');
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.525316, lng:-97.672594},
    zoom: 12.7,
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
    'static/img/round_rock_overlay_4.png', imageBounds);
    roundRockOverlay.setMap(map);

  function makeMarkerIcon(logo) {
    var markerImage = new google.maps.MarkerImage(logo);
    return markerImage;
  }

  var ViewModel = function() {
    var self = this;
    this.locationList = ko.observableArray();
    this.panelLocationList = ko.observableArray();
    this.poiList = ko.observableArray();
    this.panelPoiList = ko.observableArray();
    this.premiumLocations = ko.observableArray();

    this.locationName = ko.observable();
    this.locationAddress = ko.observable();
    this.locationLogo = ko.observable();
    this.locationPhone = ko.observable();
    this.locationMarkerIcon = ko.observable();
    this.locationAd = ko.observable();
    this.locationWebsite = ko.observable();

    this.poiName = ko.observable();
    this.poiAddress = ko.observable();
    this.poiPhone = ko.observable();
    this.poiWebsite = ko.observable();
    this.poiLogo = ko.observable();

    this.showPremiumAd = ko.observable(true);
    this.premiumAdSelection = ko.observable(premiumAdImages[Math.floor(Math.random()*premiumAdImages.length)]);

    this.togglePanels = ko.observable(false);
    this.togglePanelsText = ko.observable('Hide Panels');
    this.togglePanelLocationList = ko.observable(false);

    this.chosenCategory = ko.observable();
    this.chosenLocation = ko.observable();
    this.chosenPOI = ko.observable();

    this.zoomButtonStatus = ko.observable(false);
    this.zoomButtonText = ko.observable('Zoom');

    this.leftPaneToggle = ko.observable(false);
    this.rightPaneToggle = ko.observable(false);

    this.categories = ko.observableArray([
      'All',
      'Medical',
      'Financial',
      'Food & Drink',
      'Lodging',
      'Religious',
      'Government',
      'Education',
      'Real Estate',
      'Retail',
      'Health & Wellness',
      'Service'
    ]);

    this.poiCategories = ko.observableArray ([
      'All',
      'Attractions',
      'Chambers of Commerce',
      'Fire Stations',
      'Golf Courses',
      'Libraries',
      'Parks',
      'Police Stations',
      'Recreation',
      'Public Facilities',
      'Medical Centers',
      'Universities',
      'Schools'
    ])

    locations.forEach(function(locationInfo) {
      self.locationList.push(new Location(locationInfo));
      self.panelLocationList.push(new Location(locationInfo));
    });

    pointsOfInterest.forEach(function(poiInfo) {
      self.poiList.push(new Poi(poiInfo));
      self.panelPoiList.push(new Poi(poiInfo));
    })

    for (var j = 0; j < locations.length; j++) {
      if (locations[j].premium === true) {
        self.premiumLocations.push(locations[j]);
      }
    }

    this.clearLocationMarkers = function() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setAnimation(null);
        markers[i].setMap(null);
      }
    }

    this.showPremiumLocations = function () {
      for (i = 0; i < markers.length; i++) {
        for (var x = 0; x < self.premiumLocations().length; x++) {
          if (self.premiumLocations()[x].title === markers[i].title) {
            markers[i].setMap(map);
          }
        }
      }
    }

    this.showLocationMarkers = function () {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setAnimation(google.maps.Animation.DROP);
        markers[i].setMap(map);
      }
    }

    this.showPOIMarkers = function() {
      for (var i = 0; i < poiMarkers.length; i++) {
        poiMarkers[i].setAnimation(google.maps.Animation.DROP);
        poiMarkers[i].setMap(map);
      }
    }

    this.clearPOIMarkers = function() {
      for (var i = 0; i < poiMarkers.length; i++) {
        poiMarkers[i].setAnimation(null);
        poiMarkers[i].setMap(null);
      }
    }

    this.showAllMarkers = function() {
      self.showLocationMarkers();
      self.showPOIMarkers();
    }

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
        var phone = locations[i].phone;
        var website = locations[i].website;
        var markerIcon = locations[i].markerIcon;
        var marker = new google.maps.Marker({
          position: position,
          title: title,
          address: address,
          logo: logo,
          animation: null,
          icon: markerIcon,
          id: i
        });

        markers.push(marker);
        marker.addListener('click', function() {
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
          for (var i = 0; i < poiMarkers.length; i++) {
            poiMarkers[i].setAnimation(null);
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

    this.populatePOIMarkers = function() {
      //self.locationName('');
      //self.locationAddress('');
      //self.locationLogo('');
      //self.sendAJAX();
      //bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < pointsOfInterest.length; i++) {
        var position = pointsOfInterest[i].location;
        var title = pointsOfInterest[i].title;
        var phone = pointsOfInterest[i].phone;
        var address = pointsOfInterest[i].address;
        var website = pointsOfInterest[i].website;
        var markerIcon = pointsOfInterest[i].markerIcon;
        var marker = new google.maps.Marker({
          position: position,
          title: title,
          address: address,
          animation: null,
          icon: markerIcon,
          id: i
        });

        poiMarkers.push(marker);
        marker.addListener('click', function() {
          self.poiName(this.title);
          self.poiAddress(this.address);
          self.poiPhone(this.phone);
          self.poiWebsite(this.website);
          self.poiLogo(this.markerIcon);
          //self.sendAJAX();
          self.zoomButtonStatus(true);
          //if (self.showHidePanelText() != 'Show Panels') {
          //  self.showHideInfoPanel(true);
          //}
          for (var i = 0; i < poiMarkers.length; i++) {
            poiMarkers[i].setAnimation(null);
          }
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
    };

    this.launchMap = function() {
      self.showPremiumAd(false);
      self.togglePanels(true);
      self.populateMarkers();
      self.populatePOIMarkers();
    };

    this.categorySearch = function() {
      self.panelLocationList([]);
      self.clearLocationMarkers();
      self.clearPOIMarkers();
      for (var i = 0; i < self.locationList().length; i++) {
        var location = self.locationList()[i];
        if (location.category === self.chosenCategory()) {
          self.panelLocationList.push(location);
          self.togglePanelLocationList(true);
          for (var x = 0; x < markers.length; x++) {
            var marker = markers[x];
            marker.setAnimation(google.maps.Animation.DROP);
            for (var j = 0; j < self.panelLocationList().length; j++) {
              var filteredLocations = self.panelLocationList()[j];
              if (filteredLocations.title === markers[x].title) {
                marker.setMap(map);
                map.setCenter({lat: 30.525316, lng:-97.672594});
                map.setZoom(12.7);
              }
            }
          }
        } else if (self.chosenCategory() === 'All') {
          self.togglePanelLocationList(true);
          self.panelLocationList.push(location);
          for (var z = 0; z < markers.length; z++) {
            markers[z].setAnimation(google.maps.Animation.DROP);
            markers[z].setMap(map);
          }
        }
      }
    };

    this.locationSelection = function() {
      self.togglePanelLocationList(false);
      self.clearLocationMarkers();
      self.clearPOIMarkers();
      self.showPremiumLocations();
      for (var i = 0; i < self.locationList().length; i++) {
        var clickedLocation = self.locationList()[i];
        if (self.chosenLocation().title === clickedLocation.title) {
          self.locationName(clickedLocation.title);
          self.locationLogo(clickedLocation.logo);
          self.locationPhone(clickedLocation.phone)
          self.locationAddress(clickedLocation.address);
          self.locationAd(clickedLocation.ad);
          self.locationWebsite(clickedLocation.website);
          //self.sendAJAX();
          self.zoomButtonStatus(true);
          if (self.togglePanelsText() != 'Show Panels') {
            self.togglePanels(true);
          }
        }
      }
      for (var j = 0; j < markers.length; j++) {
        markers[j].setAnimation(null);
        markers[j].setZIndex(0);
        if (self.locationName() === markers[j].title) {
          markers[j].setZIndex(100);
          markers[j].setAnimation(google.maps.Animation.BOUNCE);
          markers[j].setMap(map)
          //if (self.zoomButtonText() === 'Zoom') {
            map.panTo(markers[j].position);
          //} else {
          //  map.setZoom(11.2);
          //  map.fitBounds(bounds);
          //}
          //self.populateInfoWindow(markers[i], mainInfoWindow);
          //if (self.zoomButtonText() === 'Zoom') {
          //  self.zoomButtonText('Pan Out');
          //} else {
          //  self.zoomButtonText('Zoom');
          //}
          //console.log(self.locationName());
            //self.populateInfoWindow(markers[j], mainInfoWindow);
        }
      }
    };

    this.poiCategorySearch = function() {
      self.panelLocationList([]);
      self.panelPoiList([]);
      self.clearLocationMarkers();
      self.showPremiumLocations();
      for (var i = 0; i < self.poiList().length; i++) {
        var poi = self.poiList()[i];
        if (poi.category === self.chosenPOI()) {
          self.panelPoiList.push(poi);
          self.panelLocationList.push(poi);
          self.togglePanelLocationList(true);
          for (var x = 0; x < poiMarkers.length ; x++) {
            var marker = poiMarkers[x];
            marker.setMap(null);
            marker.setAnimation(google.maps.Animation.DROP);
            for (var j = 0; j < self.panelPoiList().length; j++) {
              var filteredPOIs = self.panelPoiList()[j];
              if (filteredPOIs.title === poiMarkers[x].title) {
                marker.setMap(map);
                map.setCenter({lat: 30.525316, lng:-97.672594});
                map.setZoom(12.7);
              }
            }
          }
        } else if (self.chosenPOI() === 'All') {
          self.clearLocationMarkers();
          self.panelPoiList.push(poi);
          self.panelLocationList.push(poi);
          self.togglePanelLocationList(true);
          for (var j = 0; j < poiMarkers.length; j++) {
            poiMarkers[j].setAnimation(google.maps.Animation.DROP);
            poiMarkers[j].setMap(map);
          }
        } else if (self.chosenPOI() === undefined) {
          self.clearPOIMarkers();
        }
      }
    };

    this.testFunction = function() {
      for (var i = 0; i < poiMarkers.length; i++) {
      poiMarkers[i].setAnimation(null);
      console.log(poiMarkers[i].title, poiMarkers[i].position, poiMarkers[i].phone, poiMarkers[i].address, poiMarkers[i].website);
      }
    }
  };
  ko.applyBindings(new ViewModel());
}
