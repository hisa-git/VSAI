const notyf = new Notyf({
  duration: 3000,
  position: { x: "right", y: "top" },
});

function copyTextFromElement(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    notyf.error("Элемент не найден");
    return;
  }

  const text = element.innerText || element.value;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      notyf.success("Скопійовано у буфер обміну");
    })
    .catch(() => {
      notyf.error("Помилка копіювання");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.querySelector("#copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () =>
      copyTextFromElement("#copy-target")
    );
  }
});
