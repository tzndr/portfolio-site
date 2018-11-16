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
      "lodaed a page or article. It then builds an informational summary that gives " +
      "detailed answers to specific questions regarding the site's reader activity.",
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
      "specific ports and traffic, have seperate users with strict permissions, and a " +
      "key-based SSH authentication system to prevent outside threats and attacks.",
      languages: [
        {path: "../static/img/linux.jpg"},
        {path: "../static/img/apache.png"},
        {path: "../static/img/aws.png"}
      ]
  }
];

var myStory = "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
