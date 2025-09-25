let formulario = document.querySelector(".formularioprincipal");
let mascara = document.querySelector(".mascara-form");

function cliqueiNoBotao() {
  if (window.innerWidth <= 1200) {
    formulario.classList.add("ativo");
    mascara.classList.add("ativo");
    document.body.style.overflow = "hidden";
  } else {
    formulario.style.left = "50%";
    formulario.style.transform = "translateY(-50%)";
    mascara.style.visibility = "visible";
    mascara.style.opacity = "1";
    document.body.style.overflow = "hidden";
  }
}

function sumirFormulario() {
  if (window.innerWidth <= 1200) {
    formulario.classList.remove("ativo");
    mascara.classList.remove("ativo");
    document.body.style.overflow = "auto";
  } else {
    formulario.style.left = "-100%";
    mascara.style.visibility = "hidden";
    mascara.style.opacity = "0";
    document.body.style.overflow = "auto";
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    sumirFormulario();
  }
});

const form = document.querySelector(".formularioprincipal");
form.addEventListener("submit", function (e) {
  const inputs = form.querySelectorAll("input, textarea");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "red";
      isValid = false;
    } else {
      input.style.borderColor = "";
    }
  });

  if (!isValid) {
    e.preventDefault();
    alert("Por favor, preencha todos os campos.");
  }
});

mascara.addEventListener("click", function () {
  sumirFormulario();
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 1200) {
    formulario.classList.remove("ativo");
    mascara.classList.remove("ativo");
    formulario.style.transform = "translateY(-50%)";
  } else {
    formulario.style.left = "";
    formulario.style.transform = "";
  }
});
