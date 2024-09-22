const d = document;

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

const $alias = d.querySelector(`[data-alias]`);
const $btnPlay = d.querySelector(`[data-play]`);
const $btnPause = d.querySelector(`[data-pause]`);
const $mensajeCopiado = d.querySelector(`[data-copiado]`);

const $audio = d.querySelector(`audio`);
let tiempo = 0;

const $days = d.querySelector(`[data-days]`);
const $hours = d.querySelector(`[data-hours]`);
const $min = d.querySelector(`[data-minutes]`);
const $seconds = d.querySelector(`[data-seconds]`);

const fecha = new Date(2024, 10, 16, 21, 0, 0, 0);

const $headerTitle = d.querySelector(`[data-header-title]`);
const $headerName = d.querySelector(`[data-header-nombre]`);
const $headerDescription = d.querySelector(`[data-header-descripcion]`);
const $img1 = d.querySelector(`[data-img-1]`);
const $img2 = d.querySelector(`[data-img-2]`);
const $img3 = d.querySelector(`[data-img-3]`);
const $img4 = d.querySelector(`[data-img-4]`);
const $contador = d.querySelector(`[data-contador]`);
const $fecha = d.querySelector(`[data-fecha]`);
const $contadorTitle = d.querySelector(`[data-contador-title]`);
const $contadorTitleDos = d.querySelector(`[data-contador-title-2]`);
const $informacion = d.querySelector(`[data-informacion]`);
const $regalo = d.querySelector(`[data-regalo]`);
const $asistencia = d.querySelector(`[data-asistencia]`);
const $gridContador = d.querySelector(`[data-grid-contador]`);
const $titleContador = d.querySelector(`[data-title-contador]`);

function countTimer() {
  //variables fecha
  const fechaEvento = new Date(fecha);
  const fechaActual = new Date();

  //variables DOM
  const $decSegundos = document.querySelector(`[data-decSegundos]`);
  const $uniSegundos = document.querySelector(`[data-uniSegundos]`);
  const $decMinutos = document.querySelector(`[data-decMinutos]`);
  const $uniMinutos = document.querySelector(`[data-uniMinutos]`);
  const $decHoras = document.querySelector(`[data-decHoras]`);
  const $uniHoras = document.querySelector(`[data-uniHoras]`);
  const $cenDias = document.querySelector(`[data-cenDias]`);
  const $decDias = document.querySelector(`[data-decDias]`);
  const $uniDias = document.querySelector(`[data-uniDias]`);
  const $titleContador = document.querySelector(`[data-contador-title]`);

  //variables y calculo de dias horas minutos y segundos
  const totalSeconds = (fechaEvento - fechaActual) / 1000;

  const daysCalc = Math.floor(totalSeconds / 3600 / 24);
  const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
  const minsCalc = Math.floor(totalSeconds / 60) % 60;
  const secondsCalc = Math.floor(totalSeconds % 60);

  //convertir en array la informacion
  const dias = daysCalc.toString().split("");
  const horas = hoursCalc.toString().split("");
  const minutos = minsCalc.toString().split("");
  const segundos = secondsCalc.toString().split("");

  // validar los 2 digitos
  if (dias.length === 1) {
    dias.unshift("0");
    dias.unshift("0");
  }
  if (dias.length === 2) {
    dias.unshift("0");
  }
  if (horas.length === 1) {
    horas.unshift("0");
  }
  if (minutos.length === 1) {
    minutos.unshift("0");
  }
  if (segundos.length === 1) {
    segundos.unshift("0");
  }

  $decSegundos.innerHTML = segundos[0];
  $uniSegundos.innerHTML = segundos[1];
  $decMinutos.innerHTML = minutos[0];
  $uniMinutos.innerHTML = minutos[1];
  $decHoras.innerHTML = horas[0];
  $uniHoras.innerHTML = horas[1];
  $cenDias.innerHTML = dias[0];
  $decDias.innerHTML = dias[1];
  $uniDias.innerHTML = dias[2];

  if (
    daysCalc === 0 &&
    hoursCalc === 0 &&
    minsCalc === 0 &&
    secondsCalc === 0
  ) {
    console.log("LLEGO EL DIA");
    clearInterval(intervalId);
    $titleContador.innerHTML = `<h3 style="font-size: 1.5rem;">Llego el dia</h3>`;
  }
}

const intervalId = setInterval(countTimer, 1000);

d.addEventListener("click", (e) => {
  if (e.target === $alias) {
    let texto = $alias.dataset.alias;
    navigator.clipboard.writeText(texto);
    $mensajeCopiado.classList.remove("d-none");
    $mensajeCopiado.style.animation = "desplazar-arriba 2s ease";
    setTimeout(() => {
      $mensajeCopiado.classList.add("d-none");
    }, 2000);
  }

  if (e.target === $btnPlay) {
    $audio.setAttribute(
      "src",
      "assets/audio/No se ve - Emilia, Ludmilla, Zecca.mp3"
    );

    $audio.currentTime = tiempo;
    $audio.play();
    $btnPlay.parentElement.classList.add(`d-none`);
    $btnPause.parentElement.classList.remove(`d-none`);
    console.log(`Reproduciendo: ${$audio.src}`);
  }
  if (e.target === $btnPause) {
    console.log("ALGO ALGO");
    tiempo = $audio.currentTime;

    $btnPause.parentElement.classList.add(`d-none`);
    $btnPlay.parentElement.classList.remove(`d-none`);
    $audio.pause();
  }
});

d.addEventListener("DOMContentLoaded", () => {
  $btnPlay.style.animation = "escalar .75s ease-out";
  $headerTitle.style.animation = "escalar 1s ease-out";
  $headerName.style.animation = "escalar 1s ease-out";
  $headerDescription.style.animation = "desplazar-abajo 1s ease-out";
});

window.addEventListener("scroll", (e) => {
  let posicionImg1 = $img1.getBoundingClientRect().top;
  let posicionImg2 = $img2.getBoundingClientRect().top;
  let posicionImg3 = $img3.getBoundingClientRect().top;
  let posicionImg4 = $img4.getBoundingClientRect().top;
  let posicionContador = $contador.getBoundingClientRect().top;
  let posicionInformacion = $informacion.getBoundingClientRect().top;
  let posicionRegalo = $regalo.getBoundingClientRect().top;
  let posicionAsistencia = $asistencia.getBoundingClientRect().top;

  let tamañoPantalla = window.innerHeight / 1.5;

  if (posicionImg1 < tamañoPantalla) {
    $img1.style.animation = "desplazar-izquierda-derecha 1s ease-out";
    $img1.style.opacity = 1;
  }
  if (posicionImg2 < tamañoPantalla) {
    $img2.style.animation = "desplazar-derecha-izquierda 1s ease-out";
    $img2.style.opacity = 1;
  }
  if (posicionImg3 < tamañoPantalla) {
    $img3.style.animation = "desplazar-izquierda-derecha 1s ease-out";
    $img3.style.opacity = 1;
  }
  if (posicionImg4 < tamañoPantalla) {
    $img4.style.animation = "desplazar-derecha-izquierda 1s ease-out";
    $img4.style.opacity = 1;
  }

  if (posicionContador < tamañoPantalla) {
    $contador.style.animation = "escalar-2 1s ease-out";
    $contador.style.opacity = 1;
    $fecha.style.opacity = 1;
    $contadorTitle.style.opacity = 1;
    $contadorTitleDos.style.opacity = 1;
    $gridContador.style.opacity = 1;
  }
  if (posicionInformacion < tamañoPantalla) {
    $informacion.style.animation = "escalar-2 1s ease-out";
    $informacion.style.opacity = 1;
  }
  if (posicionRegalo < tamañoPantalla) {
    $regalo.style.animation = "escalar-2 1s ease-out";
    $regalo.style.opacity = 1;
  }
  if (posicionAsistencia < tamañoPantalla) {
    $asistencia.style.animation = "escalar-2 1s ease-out";
    $asistencia.style.opacity = 1;
  }
});
