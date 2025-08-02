function tocarAudio() {
  const link = document.getElementById("mp3link").value;
  const player = document.getElementById("audioPlayer");

  if (!link.endsWith(".mp3")) {
    alert("O link precisa terminar com .mp3");
    return;
  }

  player.pause();
  player.src = link;
  player.load();
  player.oncanplay = () => {
    player.play().catch(err => {
      console.error("Erro ao tentar tocar:", err);
      alert("O navegador impediu a reprodução automática. Clique no player.");
    });
  };
}