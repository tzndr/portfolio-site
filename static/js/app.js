//Declaring global variables

var Work = function(data) {
  this.title = data.title;
  this.header = data.header;
  this.imgPath = data.imgPath;
  this.description = data.description;
};

var ViewModel = function() {
  var self = this;

  this.featuredWorkList = ko.observableArray([]);

  this.selectedWork = ko.observable("Catalog");

  this.selectedWorkImg = ko.observable(featuredWork[0].imgPath);

  this.selectedWorkHeader = ko.observable(featuredWork[0].header);

  this.selectedWorkDescription = ko.observable(featuredWork[0].description);

  featuredWork.forEach(function(workInfo) {
    self.featuredWorkList.push(new Work(workInfo));
  });

  this.changeFeaturedWork = function(clickedWork) {
    for (var i = 0; i < self.featuredWorkList().length; i++) {
      if (clickedWork.title === self.featuredWorkList()[i].title) {
        self.selectedWork(clickedWork.title);
        self.selectedWorkImg(clickedWork.imgPath);
        self.selectedWorkHeader(clickedWork.header);
        self.selectedWorkDescription(clickedWork.description);
      }
    }
  }
}

ko.applyBindings(new ViewModel());


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
