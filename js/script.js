//Ficou legal
// relogio digital

const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

//como esse setInterval ta funcionando? 😲
//Mistério isso aqui
const relogioDigital = setInterval(function time() {
  let horaAtual = new Date();
  let hr = horaAtual.getHours();
  let min = horaAtual.getMinutes();
  let seg = horaAtual.getSeconds();

  // console.log(horaAtual);
  // muda esses ifs para operador ternario
  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (seg < 10) {
    seg = "0" + seg;
  }

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;
});

// relogio ponteiro

const horahand = document.querySelector(".hand.horas");
const minutohand = document.querySelector(".hand.minutos");
const segundohand = document.querySelector(".hand.segundos");

const rotation = (element, rotationPorc) => {
  element.style.setProperty("--rotation", rotationPorc * 360);
};

const setRelogio = () => {
  const AtualHora = new Date();

  const segPorc = AtualHora.getSeconds() / 60;
  const minPorc = AtualHora.getMinutes() / 60;
  const horasPorc = AtualHora.getHours() / 12;

  rotation(segundohand, segPorc);
  rotation(minutohand, minPorc);
  rotation(horahand, horasPorc);
};
setInterval(setRelogio, 1000);
