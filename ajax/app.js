// app.js

$(document).on("ready", function () {

  $(".js-show-characters").on("click", function () {
    fetchCharacters();
  });

  $(".js-add-kylo").on("click", function () {
    publishKylo();
  });

});


// ----------------------------------------
// =========   DEFINITIONS  =================

function fetchCharacters () {
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
}


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


function publishKylo () {
  var newCharacter = {
    name: "Emo Kylo Ren",
    occupation: "Whiner",
    weapon: "Complaining"
  };

  $.ajax({
    type: "POST",

    url: "https://ironhack-characters.herokuapp.com/characters",

    data: newCharacter,

    success: function (response) {
      var html = `
        <li>
          <h2> ${newCharacter.name} </h2>
          <p># ${response.id} </p>
          <p>Occupation: ${newCharacter.occupation} </p>
          <p>Weapon: ${newCharacter.weapon} </p>
        </li>
      `;

      $(".js-characters-list").append(html);

      alert("Emo Kylo Ren added successfully.");
    },

    error: function () {
      alert("Could not add Kylo Ren.");
    }
  });
}

