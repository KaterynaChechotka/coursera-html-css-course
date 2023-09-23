(function (window) {

var byeSpeaker = {};
var speakWord = "Good Bye";
byeSpeaker.sayGoodbye = function speak(name) {
     console.log(speakWord + " " + name)
};
   
   window.byeSpeaker = byeSpeaker;

})(window);