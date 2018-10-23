var typeIt = function() {
  new TypeIt('.type-it', {
    strings: ['Hello.', "I'm Tim Zander,"],
    cursor: false
  });
}

var retypeIt = function() {
  new TypeIt('.retype', {
    strings: ["a coder", "a life-long learner", "a creator", "a leader",
      "a Full-Stack Developer."],
    breakLines: false,
    autoStart: false,
    deleteSpeed: 40,
    loop: false
  });
}

typeIt();
setTimeout(retypeIt, 4000);
