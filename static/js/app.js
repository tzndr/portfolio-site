var catalogAppDescription = "A user-friendly, editable catalog application built " +
  "in HTML, CSS, and Python with Flask and SQLAlchemy. This application queries " +
  "a SQL database and uses CRUD (Create, Read, Update, Delete) functionality to " +
  "allow a logged-in user to add, remove, and edit the catalog's categories and " +
  "products. A user that is not logged in is able to view the catalog without " +
  "editing privileges. This application also has JSON endpoints for each created " +
  " category and item."

var googleMapsDescription = "An interactive map of Silicon Valley built " +
  "in JavaScript, HTML, CSS, and the KnockoutJS framework. This dynamic map " +
  "is filterable and includes highlighted locations that use observables to " +
  "update the webpage asynchronously with location-specific information, depending " +
  "on the selected marker. This information includes an interactive Google StreetView " +
  "image, company logo and address, as well as relevant New York Times and Wikipedia " +
  "articles gathered asynchronously using AJAX, JSON, and third party APIs."

var logsAnalysisDescription = "An internal reporting tool for a news website " +
  "built in Python along with PostgreSQL. This program doesn't take any input from " +
  "the user and instead connects to their database and uses SQL queries to analyze " +
  "over a million of its rows of data that contain logs from each time a reader " +
  "lodaed a page or article. It then builds an informational summary that gives " +
  "detailed answers to specific questions regarding the site's reader activity."



var linuxServerDescription = "An Amazon Web Services Lightsail Linux server secured " +
  "and set up for site and application hosting.  These Linux server instances are " +
  "configured using Apache2 web servers along with WSGI for the Python Flask-based " +
  "applications. The servers are secured with configured firewalls that allow or deny " +
  "specific ports and traffic, have seperate users with strict permissions, and a " +
  "key-based SSH authentication system to prevent outside threats and attacks."

var $catalogAppElem = $('#catalog-description');

var $googleMapsElem = $('#google-maps-description');

var $logsAnalysisElem = $('#logs-analysis-description');

var $linuxServerElem = $('#linux-server-description');

var ViewModel = {
  init: function() {
    $catalogAppElem.text(catalogAppDescription);
    $googleMapsElem.text(googleMapsDescription);
    $logsAnalysisElem.text(logsAnalysisDescription);
    $linuxServerElem.text(linuxServerDescription);
  }
}

ViewModel.init();


//var typeIt = function() {
//  new TypeIt('.type-it', {
//    strings: ['Hello.', "I'm Tim Zander,"],
//    cursor: false
//  });
//}

//var retypeIt = function() {
//  new TypeIt('.retype', {
//    strings: ["a coder", "a life-long learner", "a creator", "a leader",
//      "a Full-Stack Developer."],
//    breakLines: false,
//    autoStart: false,
//    deleteSpeed: 40,
//    loop: false
//  });
//}

//typeIt();
//setTimeout(retypeIt, 4000);
