// app.js

var phrases = [
  "May the Force be with you.",
  "Today's not the day.",
  "Say hello to my little friend!",
  "Release the Kraken!",
  "Don't answer a question with a question."
];


// Use document ready event
// because our <script> tags are at the top
$(document).on("ready", function () {
 refreshRandomPhrase();

  $(".js-refresh-button").on("click", function () {
    refreshRandomPhrase();
  });
});


// This also works
// $(document).ready(function () {
//   $(".js-phrase-heading").text(randomPhrase);
// });


// ----------------------------------------------------
//     DEFINITIONS

function refreshRandomPhrase () {
  var random0to4 = Math.random() * 4;
  var randomInt = Math.round(random0to4);
  var randomPhrase = phrases[randomInt];

  console.log(randomPhrase);

  $(".js-phrase-heading").text(randomPhrase);
}
