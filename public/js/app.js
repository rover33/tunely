//client side



$(document).ready(function() {
  console.log('app.js loaded!');


  $.ajax({
    url: "/api/albums",
    type: "get",
    contentType: "application/json"
  }).done(function(data){
    data.forEach(function(album){
    renderAlbum(album)
    })
  })


$('form').submit(function(e){
  e.preventDefault();

var formdata = $(this).serialize();

$(this).trigger("reset");

  $.ajax({
    url: "/api/albums",
    type: "POST",
    data: formdata,
    dataType: "string"
  }).done(function(data){
    console.log("post can suck ass")
    renderAlbum(data);
    })
  })
})



// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);

  var albumHtml =
  "        <!-- one album -->" +
  "        <div class='row album' data-album-id='" + "HARDCODED ALBUM ID" + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 album-art'>" +
  "                     <img class='img-fluid' src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Album Name:</h4>" +
  "                        <span class='album-name'>" + album.name + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Artist Name:</h4>" +
  "                        <span class='artist-name'>" +  album.artistName + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='album-releaseDate'>" + album.releaseDate + "</span>" +
  "                      </li>" + buildSongsHtml(album.songs);
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +
  "          </div>" +
  "          <!-- end one album -->";


  // render to the page with jQuery
  $('#albums').append(albumHtml);
}


function buildSongsHtml(songs) { 
var songText = "	– "; 
songs.forEach(function(song) { 
  songText = songText + "(" + song.trackNumber + ") " + song.name + " – "; }); 
  var songsHtml = songText;
  return songsHtml; 
}


// "  <li class='list-group-item'> " +
// "  <h4 class='inline-header'>Songs:</h4> " +
// "  <span>	– (1)" + songs[0].name + " – (2) " + songs[1].name + " – (3) " + songs[2].name + " – (4) " + songs[3].name + " – (5) " + songs[4].name + " – (6) " + songs[5].name + " – (7) " +  songs[6].name + " </span> " +
// " </li> "



