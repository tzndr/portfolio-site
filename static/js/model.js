//Model data

var featuredWork = [
  {
    title: "Catalog",
    header: "Editable Catalog with User Authentication",
    imgPath: "../static/img/catalog_app.png",
    description: "A user-friendly, editable content management system created " +
      "with HTML, CSS, and Python with Flask and SQLAlchemy. This application " +
      "queries a PostgreSQL database and uses CRUD (Create, Read, Update, Delete) " +
      "functionality and OAuth to allow a logged-in user to add, remove, and edit " +
      "the catalog's categories and products. An anonymous user is able to view the " +
      "catalog without editing privileges. This application also has JSON endpoints " +
      "for each created category and item.",
     link: "https://github.com/tzndr/content-management-system",
    languages: [
      {path: "../static/img/python1.png"},
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
      "created with Python along with PostgreSQL. This program doesn't take any input from " +
      "the user and instead connects to their database and uses SQL queries to analyze " +
      "over a million of its rows of data that contain logs from each time a reader " +
      "loaded a page or article. It then builds an informational summary that gives " +
      "detailed answers to specific questions regarding the site's reader activity.",
      link: "https://github.com/tzndr/logs-analysis-reporting-tool",
      languages: [
        {path: "../static/img/python1.png"},
        {path: "../static/img/postgresql.png"},
      ]
  },
  {
    title: "Interactive Map",
    header: "Interactive Map with Google Maps API",
    imgPath: "../static/img/google_mapsAPI.png",
    description: "An interactive map of Silicon Valley created with Google Maps " +
      "API, JavaScript, HTML, CSS, and the KnockoutJS framework. This dynamic map " +
      "is filterable and includes highlighted locations that use observables to " +
      "update the webpage asynchronously with location-specific information, depending " +
      "on the selected marker. This information includes an interactive Google StreetView " +
      "image, company logo and address, as well as relevant New York Times and Wikipedia " +
      "articles populated using AJAX, JSON, and third party API requests.",
      link: "http://timzander.com/interactive_map",
      languages: [
        {path: "../static/img/js.png"},
        {path: "../static/img/googlemapslogo.png"},
        {path: "../static/img/api.png"},
        {path: "../static/img/kojs.png"},
        {path: "../static/img/html_css.png"}
      ]
  },
  {
    title: "Linux Server",
    header: "Linux Server Configuration",
    imgPath: "../static/img/linux_config.png",
    description: "An Amazon Web Services Lightsail baseline Ubuntu server secured " +
      "and fully functional for site and application hosting.  These Linux server instances are " +
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
  "to dedicate themselves to that single particular subject or role for the " +
  "rest of their lives - I have a different story.";

var myStory2 = "Most of my professional story thus far has been in management in the " +
  "electronic payments industry - a field I had an opportunity to join at a very young age " +
  "and fortunate enough to have been able to advance through, experiencing a full spectrum of " +
  "responsibilities, perspective, and levels of leadership. I'm grateful for those 10 " +
  "years as they've given me the dynamic skill set needed to be forged into the unique " +
  "developer I've become today. But there had come a moment when I took a step back and asked " +
  "myself what I truly wanted to spend my days doing - and the answer was immediately clear. " +
  "I knew then it was time to leave the comforts of a successful management career and " +
  "set sail into the turbulent, ever-changing waters of technology with a lifetime of " +
  "new challenges to overcome, new goals to achieve, ideas to foster and, most importantly, " +
  "a lifetime of new things to learn. This is what I've come to realize about my story: " +
  "Though I've enjoyed my prior career and am ever-thankful for the skills it's provided to " +
  "me, my true passion is being in a sea of knowledge and having to learn how to swim over " +
  "and over again - and the sea I belong in is technology and development.";

var skillSetDescription = "With an aptitude for bold, elegant, and clean design styles " +
  "coupled with the ability to create applications, sites, and programs with feature-rich user " +
  "experiences and efficient backend functionality, I currently use these languages, " +
  "frameworks and modules. However, I am always learning more and strive to continue " +
  "the evolution of my skill set in parallel with the ever-changing landscape of development.";


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

var navArray = [
  "My Story",
  "Skill Set",
  "Featured Work",
  "Connect"
]
