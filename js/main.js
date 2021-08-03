function atualizaRelogio() {
  var momentoAtual = new Date();

  var vhora = momentoAtual.getHours();
  var vminuto = momentoAtual.getMinutes();
  var vsegundo = momentoAtual.getSeconds();

  var vdia = momentoAtual.getDate();
  var vmes = momentoAtual.getMonth() + 1;
  var vano = momentoAtual.getFullYear();

  if (vdia < 10) {
    vdia = "0" + vdia;
  }
  if (vmes < 10) {
    vmes = "0" + vmes;
  }
  if (vhora < 10) {
    vhora = "0" + vhora;
  }
  if (vminuto < 10) {
    vminuto = "0" + vminuto;
  }
  if (vsegundo < 10) {
    vsegundo = "0" + vsegundo;
  }

  dataFormat = vdia + " / " + vmes + " / " + vano;
  horaFormat = vhora + " : " + vminuto + " : " + vsegundo;

  document.getElementById("data").innerHTML = dataFormat;
  document.getElementById("hora").innerHTML = horaFormat;

  setTimeout("atualizaRelogio()", 1000);
}

function loginToggle() {
  const login = document.querySelector(".login-button");
  const loginSection = document.querySelector(".login");
  const back = document.querySelector(".icon-arrow-left-circle");

  login.addEventListener("click", () => {
    if (document.querySelector(".menu").classList.contains("active")) {
      document.querySelector(".menu").classList.remove("active");
      document.querySelectorAll(".hamburguer-icon").forEach((item) => {
        item.classList.toggle("active");
      });
      loginSection.classList.toggle("active");
    } else {
      loginSection.classList.toggle("active");
    }
  });
  back.addEventListener("click", () => {
    loginSection.classList.remove("active");
  });
}
function passToggle() {
  const icons = document.querySelectorAll(".pass-container .icon");
  const password = document.querySelector(".pass");

  function toggleText() {
    if (password.getAttribute("type") === "password") {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  }

  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      icons.forEach((toggle) => {
        toggle.classList.toggle("active");
      });
      toggleText();
    });
  });
}
function toggleMobileMenu() {
  const buttons = document.querySelectorAll(".hamburguer-icon");
  const menu = document.querySelector(".menu");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((toggle) => {
        toggle.classList.toggle("active");
      });
      menu.classList.toggle("active");
    });
  });
}

window.onload = function () {
  atualizaRelogio();
  loginToggle();
  passToggle();
  toggleMobileMenu();
};
