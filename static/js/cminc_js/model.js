var premiumAdImages = [];

var markers = [];

var map;

var infoWindow;

var directionsDisplay;

var poiMarkers = [];

var Location = function(data) {
  this.title = data.title;
  this.location = data.location;
  this.address = data.address;
  this.phone = data.phone;
  this.category = data.category;
  this.logo = data.logo;
  this.markerIcon = data.markerIcon;
  this.ad = data.ad;
  this.website = data.website;
  this.premium = data.premium;
};

var Poi = function(data) {
  this.title = data.title;
  this.location = data.location;
  this.address = data.address;
  this.phone = data.phone;
  this.category = data.category;
  this.markerIcon = data.markerIcon;
  this.website = data.website;
};
