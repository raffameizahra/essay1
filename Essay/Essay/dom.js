document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".gallery img");
  const basket = document.getElementById("basket");
  const basketStat = document.getElementById("basketstat");
  const text = document.getElementById("text1");
  const body = document.getElementById("bd");
  const popup = document.getElementById("popup");
  const colorInput = document.getElementById("colorInput");
  const okBtn = document.getElementById("okBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  let currentAction = "";
  let count = 0;

  function updateBasket() {
    basketStat.textContent = `The flower bucket currently contains ${count} flowers.`;
  }

  imgs.forEach(img => {
    img.addEventListener("click", () => {
      const clone = img.cloneNode(true);
      clone.onclick = () => {
        basket.removeChild(clone);
        count--;
        updateBasket();
      };
      basket.appendChild(clone);
      count++;
      updateBasket();
    });
  });

  // Tombol ubah warna teks
  document.getElementById("chtext").addEventListener("click", () => {
    currentAction = "text";
    popup.style.display = "flex";
    colorInput.value = "";
    colorInput.focus();
  });

  // Tombol ubah warna background
  document.getElementById("bccol").addEventListener("click", () => {
    currentAction = "background";
    popup.style.display = "flex";
    colorInput.value = "";
    colorInput.focus();
  });

  okBtn.addEventListener("click", () => {
    const color = colorInput.value.trim();
    if (color) {
      if (currentAction === "text") {
        text.style.color = color;
      } else if (currentAction === "background") {
        body.style.backgroundColor = color;
        basket.style.backgroundColor = color; // ikut berubah
      }
    }
    popup.style.display = "none";
  });

  cancelBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
