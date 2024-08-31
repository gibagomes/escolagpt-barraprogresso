document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progressBar");
  const startProgressBtn = document.getElementById("startProgressBtn");
  let width = 0;

  function move() {
    if (width >= 100) {
      clearInterval(intervalId);
    } else {
      width++;
      progressBar.style.width = width + "%";
      progressBar.textContent = width + "%";
    }
  }

  startProgressBtn.addEventListener("click", function () {
    width = 0;
    progressBar.style.width = width + "%";
    progressBar.textContent = width + "%";
    intervalId = setInterval(move, 100); // Incrementa a barra de progresso a cada 100ms
  });
});
