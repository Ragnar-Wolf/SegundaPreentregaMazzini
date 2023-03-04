class Tarjeta {
  constructor(nombre, id, tasa3, tasa6, tasa12) {
    this.nombre = nombre;
    this.id = id;
    this.tasa3 = tasa3;
    this.tasa6 = tasa6;
    this.tasa12 = tasa12;
  }
}

const visa = new Tarjeta("Visa", 1, 15, 25, 30);
const mastercard = new Tarjeta("Mastercard", 2, 20, 35, 42);
const naranja = new Tarjeta("Naranja", 3, 13, 29, 33);
const american = new Tarjeta("American express", 4, 17, 31, 37);

let utilizarTc = parseInt(
  prompt(
    "Elige el numero de la tarjeta que deseas utilizar! 1. Tarjeta Visa - 2. Tarjeta Mastercard - 3. Tarjeta Naranja - 4. Tarjeta American express"
  )
);

let eligioTc = false;

let infoTcElegida;

while (eligioTc === false) {
  if (utilizarTc === 1) {
    eligioTc = true;
    infoTcElegida = visa;
  } else if (utilizarTc === 2) {
    eligioTc = true;
    infoTcElegida = mastercard;
  } else if (utilizarTc === 3) {
    eligioTc = true;
    infoTcElegida = naranja;
  } else if (utilizarTc === 4) {
    eligioTc = true;
    infoTcElegida = american;
  } else {
    utilizarTc = parseInt(
      prompt(
        "Elige el numero de la tarjeta que deseas utilizar! 1. Tarjeta Visa - 2. Tarjeta Mastercard - 3. Tarjeta Naranja - 4. Tarjeta American express"
      )
    );
  }
}

const montoSolicitado = parseInt(prompt("ingresa el monto del producto:"));

const cuota3 = calcularCuota(montoSolicitado, infoTcElegida.tasa3, 3);
const cuota6 = calcularCuota(montoSolicitado, infoTcElegida.tasa6, 6);
const cuota12 = calcularCuota(montoSolicitado, infoTcElegida.tasa12, 12);
console.log(cuota3, cuota6, cuota12);

function calcularCuota(montoSolicitado, infoTcElegida) {
  const cuota = (montoSolicitado * infoTcElegida) / 100 + montoSolicitado;
  return cuota;
}

alert(
  `El producto con ${infoTcElegida.nombre} te queda en: 1. ${cuota3} 3 cuotas- 2. ${cuota6} 6 cuotas - 3. ${cuota12} 12 cuotas`
);
console.log("infoTc", infoTcElegida, montoSolicitado);
