function tocarAudio() {
  const link = document.getElementById("mp3link").value;
  const player = document.getElementById("audioPlayer");
  player.src = link;
  player.play();
}