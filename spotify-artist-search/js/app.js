// app.js

$(document).on("ready", function () {

  $(".js-list-albums").on("click", function (event) {
    // The thing that was just clicked:
    //     event.currentTarget
    //           OR
    //          this

    var artistId = $(event.currentTarget).data("artist-id");
    var artistName = $(event.currentTarget).text();

    // Remove extra spaces from name
    artistName = artistName.trim();
    //                                          OR
    // var artistId = $(event.currentTarget).prop("data-artist-id");

    console.log(`You clicked the artist ${artistId}`);

    $.ajax({
      url: `https://api.spotify.com/v1/artists/${artistId}/albums`,
      success: function (response) {

        $(".js-artist-name").text(`${artistName}'s Albums`);

        displayAlbums(response.items);
      },
      error: function () {
        alert("SPOTIFY SCREWED UP! :(")
      }
    });

  });

});



// ====================================================================
// ---------------------- DEFINITIONS ---------------------------


function displayAlbums (albums) {
  // Empty list in case it has old albums
  $(".js-album-list").empty();

  albums.forEach(function (album) {

    var html = `
      <!-- Store the album ID for the next AJAX request -->
      <li data-album-id="${album.id}">
        <img src="${album.images[1].url}">
        <h5> ${album.name} </h5>
      </li>
    `;

    $(".js-album-list").append(html);
  });

  $(".js-albums-modal").modal("show");
}
