//Model data

var featuredWork = [
  {
    title: "Catalog",
    header: "Editable Catalog with User Authentication",
    imgPath: "../static/img/catalog_app.png",
    description: "A user-friendly, editable catalog application built " +
     "in HTML, CSS, and Python with Flask and SQLAlchemy. This application queries " +
     "a SQL database and uses CRUD (Create, Read, Update, Delete) functionality to " +
     "allow a logged-in user to add, remove, and edit the catalog's categories and " +
     "products. A user that is not logged in is able to view the catalog without " +
     "editing privileges. This application also has JSON endpoints for each created " +
     " category and item.",
     link: "https://github.com/tzndr/content-management-system",
    languages: [
      {path: "../static/img/python.png"},
      {path: "../static/img/flask.png"},
      {path: "../static/img/postgresql.png"},
      {path: "../static/img/html_css.png"}
    ]
  },
  {
    title: "Logs Analysis",
    header: "Logs Analysis Program",
    imgPath: "../static/img/logs_analysis.png",
    description: "An internal reporting tool for a news website " +
      "built in Python along with PostgreSQL. This program doesn't take any input from " +
      "the user and instead connects to their database and uses SQL queries to analyze " +
      "over a million of its rows of data that contain logs from each time a reader " +
      "loaded a page or article. It then builds an informational summary that gives " +
      "detailed answers to specific questions regarding the site's reader activity.",
      link: "https://github.com/tzndr/logs-analysis-reporting-tool",
      languages: [
        {path: "../static/img/python.png"},
        {path: "../static/img/postgresql.png"},
      ]
  },
  {
    title: "Google Maps API",
    header: "Interactive Map with Google Maps API",
    imgPath: "../static/img/google_mapsAPI.png",
    description: "An interactive map of Silicon Valley built " +
      "in JavaScript, HTML, CSS, and the KnockoutJS framework. This dynamic map " +
      "is filterable and includes highlighted locations that use observables to " +
      "update the webpage asynchronously with location-specific information, depending " +
      "on the selected marker. This information includes an interactive Google StreetView " +
      "image, company logo and address, as well as relevant New York Times and Wikipedia " +
      "articles gathered asynchronously using AJAX, JSON, and third party APIs.",
      link: "https://github.com/tzndr/interactive-map",
      languages: [
        {path: "../static/img/javascript.png"},
        {path: "../static/img/googlemapslogo.png"},
        {path: "../static/img/kojs.png"},
        {path: "../static/img/html_css.png"}
      ]
  },
  {
    title: "Linux Server",
    header: "Linux Server Configuration",
    imgPath: "../static/img/linux_config.png",
    description: "An Amazon Web Services Lightsail Linux server secured " +
      "and set up for site and application hosting.  These Linux server instances are " +
      "configured using Apache2 web servers along with WSGI for Python " +
      "applications. The servers are secured with configured firewalls that allow or deny " +
      "specific ports and traffic, have separate users with strict permissions, and a " +
      "key-based SSH authentication system to prevent outside threats and attacks.",
      link: "https://github.com/tzndr/linux-server-configuration",
      languages: [
        {path: "../static/img/linux.jpg"},
        {path: "../static/img/apache.png"},
        {path: "../static/img/aws.png"}
      ]
  }
];

var storyQuote = "\"If knowledge is the door to all things, then a will to learn is " +
  "the key.\"";

var myStory = "Many successful people find their passion early in life and are able " +
  "to dedicate themselves to that single particular subject or desired outcome for the " +
  "rest of their lives - this is not my story.";

var myStory2 = "Most of my professional story thus far has been in management in the " +
  "electronic payments industry - a field I had an opportunity to join at a very young age " +
  "and fortunate enough to have been able to advance through, experiencing a full spectrum of " +
  "responsibilities, perspective and levels of leadership. I'm grateful for those 10 " +
  "years as they've given me the dynamic skill set needed to be forged into the unique " +
  "developer I've become today. But there had come a moment of realization about what I " +
  "truly wanted to do and I knew it was time to leave the comforts of a successful " +
  "management career and set sail into the turbulent, ever-changing waters of technology " +
  "with a lifetime of new challenges to overcome, new goals to achieve and, most importantly, " +
  "a lifetime of new things to learn. This is what I've come to realize about my story: " +
  "it isn't one particular thing that is my passion, but instead my true passion is " +
  "being in a sea of knowledge and having to learn how to swim over and over " +
  "again - and what better sea to swim in than that of software development.";


var connectInformation = [
  {
    type: "email",
    text: "Email.",
    info: "connect@timzander.com"
  },
  {
    type: "phone",
    text: "Talk or Text.",
    info: "1.214.713.1096"
  }
];
