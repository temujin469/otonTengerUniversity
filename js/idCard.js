const downloadCharacterSheet = () => {
  const node = document.getElementById("id-card");

  html2canvas(node).then((canvas) => {
    document.body.appendChild(canvas);
    var img = canvas.toDataURL("image/png");
    document.write('<img src="' + img + '"/>');
    var link = document.createElement("a");
    link.download = "filename.png";
    link.href = canvas.toDataURL();
    link.click();
  });
};

const bindInputToElement = (inputEl, elementEl) => {
  inputEl.addEventListener("change", () => {
    elementEl.textContent = inputEl.value;
  });
};

document
  .getElementById("download-button")
  .addEventListener("click", downloadCharacterSheet);

document.querySelector(".id-card__subject-id").textContent = md5(
  "something"
).slice(0, 8);

// Bind name
const nameEl = document.getElementById("name");
bindInputToElement(nameEl, document.getElementById("id-card-name"));
nameEl.addEventListener("change", () => {
  document.querySelector(".id-card__subject-id").textContent = md5(
    nameEl.value
  ).slice(0, 8);
});

// Bind date of birth
bindInputToElement(
  document.getElementById("date-of-birth"),
  document.getElementById("id-card-date-of-birth")
);

// Bind gender
bindInputToElement(
  document.getElementById("gender"),
  document.getElementById("id-card-gender")
);

// Bind height
bindInputToElement(
  document.getElementById("height"),
  document.getElementById("id-card-height")
);

// Bind weight
bindInputToElement(
  document.getElementById("weight"),
  document.getElementById("id-card-weight")
);

// Bind mugshot
document.getElementById("mugshot").addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var FR = new FileReader();
    FR.onload = function (e) {
      var img = document.getElementById("id-card-mugshot");
      img.src = e.target.result;
    };
    FR.readAsDataURL(this.files[0]);
  }
});
