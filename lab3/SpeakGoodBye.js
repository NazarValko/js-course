(function (window) {
    const byeSpeaker = {};
    const speakWord = "Good Bye";
  
    byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
    window.byeSpeaker = byeSpeaker;
  })(window);
  