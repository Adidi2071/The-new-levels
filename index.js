document.addEventListener("click", () => {
  const audio = document.getElementById("music");
  audio.play();
}, { once: true });
if (!sessionStorage.getItem("musicStarted")) {
  document.addEventListener("click", () => {
    const audio = document.getElementById("music");
    audio.play();
    sessionStorage.setItem("musicStarted", "true");
  }, { once: true });
}
