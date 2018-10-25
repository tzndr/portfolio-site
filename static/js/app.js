var catalogAppDescription = "A user-friendly, editable catalog application built with HTML, CSS, and Python " +
  "with Flask and SQLAlchemy. This application queries a SQL database and uses CRUD " +
  "(Create, Read, Update, Delete) functionality to allow a logged-in user to add, " +
  "remove, and edit the catalog's categories and products."

var $catalogDescription = $('#catalog-description');

var ViewModel = {
  init: function() {
    $catalogDescription.text(catalogAppDescription);
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
