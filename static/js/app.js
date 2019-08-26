//Declaring global variables
var navSelector = 0;

var Work = function(data) {
  this.title = data.title;
  this.header = data.header;
  this.imgPath = data.imgPath;
  this.description = data.description;
  this.languages = data.languages;
  this.link = data.link;
};

var ViewModel = function() {
  var self = this;

  this.featuredWorkList = ko.observableArray([]);

  this.selectedWork = ko.observable("Catalog");

  this.selectedWorkImg = ko.observable(featuredWork[0].imgPath);

  this.selectedWorkHeader = ko.observable(featuredWork[0].header);

  this.selectedWorkLanguages = ko.observableArray(featuredWork[0].languages);

  this.selectedWorkDescription = ko.observable(featuredWork[0].description);

  this.selectedWorkLink = ko.observable(featuredWork[0].link);

  this.infoBoxHeader = ko.observable("Let's Talk.");

  this.infoBoxData = ko.observable();

  this.projectButtonText = ko.observable("View Project on GitHub");

  this.projectIsLive = ko.observable(false);

  this.nav1 = ko.observable(false);

  this.nav2 = ko.observable(false);

  this.nav3 = ko.observable(false);

  this.nav4 = ko.observable(false);

  featuredWork.forEach(function(workInfo) {
    self.featuredWorkList.push(new Work(workInfo));
  });

  this.changeNavColor = function() {
    $(document).click(function(event) {
      var selectedNav = $(event.target).text();
      console.log(selectedNav)
      if (selectedNav === "") {
        self.nav1(false);
        self.nav2(false);
        self.nav3(false);
        self.nav4(false);
      }
      else if (selectedNav === "My Story") {
        self.nav1(true);
        self.nav2(false);
        self.nav3(false);
        self.nav4(false);
      }
      else if (selectedNav === "Skill Set") {
        self.nav1(false);
        self.nav2(true);
        self.nav3(false);
        self.nav4(false);
      }
      else if (selectedNav === "Featured Work") {
        self.nav1(false);
        self.nav2(false);
        self.nav3(true);
        self.nav4(false);
      }
      else if (selectedNav === "Connect") {
        self.nav1(false);
        self.nav2(false);
        self.nav3(false);
        self.nav4(true);
      }
    });
    return true;
  }

  this.changeFeaturedWork = function(clickedWork) {
    for (var i = 0; i < self.featuredWorkList().length; i++) {
      if (clickedWork.title === self.featuredWorkList()[i].title) {
        self.selectedWork(clickedWork.title);
        self.selectedWorkImg(clickedWork.imgPath);
        self.selectedWorkHeader(clickedWork.header);
        self.selectedWorkDescription(clickedWork.description);
        self.selectedWorkLanguages(clickedWork.languages);
        self.selectedWorkLink(clickedWork.link);
        if (clickedWork.title === "Interactive Map") {
          self.projectButtonText("View Live Project Demo");
          self.projectIsLive(true);
        } else {
          self.projectButtonText("View Project on GitHub");
          self.projectIsLive(false);
        }
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
