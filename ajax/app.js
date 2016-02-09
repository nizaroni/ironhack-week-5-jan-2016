// app.js

$.ajax({
  url: "https://ironhack-characters.herokuapp.com/characters",

  success: function (response) {
    console.log("Everything went okay.");

    displayCharacters(response);
  },

  error: function () {
    console.log("We screwed up!");
  }
});


// ----------------------------------------
// =========   DEFINITIONS  =================

function displayCharacters (characters) {

  characters.forEach(function (char) {

    var html = `
      <li>
        <h2> ${char.name} </h2>
        <p># ${char.id} </p>
        <p>Occupation: ${char.occupation} </p>
        <p>Weapon: ${char.weapon} </p>
      </li>
    `;

    $(".js-characters-list").append(html);
  });

}