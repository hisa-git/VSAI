const notyf = new Notyf({
  duration: 3000,
  position: { x: "right", y: "top" },
});

function copyCurrentURL() {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      console.log("скопійовано:", url);
      notyf.success("Скопійовано у буфер обміну");
    })
    .catch((err) => {
      console.error("помилка копіювання:", err);
      notyf.error("Помилка копіювання");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.querySelector(".copy-link-btn");
  copyBtn.addEventListener("click", copyCurrentURL);
});
