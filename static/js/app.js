//Declaring global variables

var Work = function(data) {
  this.title = data.title;
  this.header = data.header;
  this.imgPath = data.imgPath;
  this.description = data.description;
  this.languages = data.languages;
};

var ViewModel = function() {
  var self = this;

  this.featuredWorkList = ko.observableArray([]);

  this.selectedWork = ko.observable("Catalog");

  this.selectedWorkImg = ko.observable(featuredWork[0].imgPath);

  this.selectedWorkHeader = ko.observable(featuredWork[0].header);

  this.selectedWorkLanguages = ko.observableArray(featuredWork[0].languages);

  this.selectedWorkDescription = ko.observable(featuredWork[0].description);

  this.infoBoxHeader = ko.observable("Let's Talk.");

  this.infoBoxData = ko.observable();

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
        self.selectedWorkLanguages(clickedWork.languages);
      }
    }
  }

  this.changeConnectInfo = function(data, event) {
    for (var i = 0; i < connectInformation.length; i++) {
      if (event.target.id === connectInformation[i].type) {
        self.infoBoxData(connectInformation[i].info);
        self.infoBoxHeader(connectInformation[i].text);
      }
    }
  }
}

ko.applyBindings(new ViewModel());
