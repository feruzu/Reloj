const hs = document.querySelector(".horas");
const min = document.querySelector(".minutos");
const seg = document.querySelector(".segundos");
const horaNumeros = document.querySelector(".hora-numeros");

// Movimiento de agujas
setInterval(() => {
  dia = new Date();
  hora = dia.getHours() * 30;
  minuto = dia.getMinutes() * 6;
  segundo = dia.getSeconds() * 6;

  hs.style.transform = `rotateZ(${hora + minuto / 12}deg)`;
  min.style.transform = `rotateZ(${minuto}deg)`;
  seg.style.transform = `rotateZ(${segundo}deg)`;
});

// Hora
setInterval(() => {
  dia = new Date();
  hora = dia.getHours();
  minuto = dia.getMinutes();
  segundo = dia.getSeconds();

  if (hora < 10) hora = "0" + hora;
  if (minuto < 10) minuto = "0" + minuto;
  if (segundo < 10) segundo = "0" + segundo;

  horaNumeros.innerHTML = hora + `:` + minuto + `:` + segundo;
}, 1000);
