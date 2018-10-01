
var playlist = {Crush: 'Cereal'};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
var playlist = {Crush: "Cereal"}
}
function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song })

}