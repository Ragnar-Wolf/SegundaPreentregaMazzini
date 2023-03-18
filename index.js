class Producto {
  constructor(id, nombre, precio){
    this.id = id
    this.nombre = nombre 
    this.precio = precio
  }
}
//creando productos
const pcGamer = new Producto(1,"pcgamer", 195300)
const noteBook = new Producto(2,"notebook", 479990)
const hardware = new Producto(3,"hardware", 21990)
const accesorios = new Producto(4,"accesorios", 24700)

//guardar productos
const productos = [pcGamer,noteBook,hardware,accesorios]
console.log(productos);

let productoElegido = prompt("Elige el producto que deseas comprar: pcgamer-notebook-hardware-accesorios")
//variable condicion del ciclo
let seguirComprando = true
const carrito = [] 

while(seguirComprando === true){ 
  const producto = productos.find(producto=>producto.nombre === productoElegido.toLocaleLowerCase().trim())
  if(producto){
    carrito.push(producto)
  } else {
    productoElegido = prompt("Elige un producto correcto: pcgamer-notebook-hardware-accesoriosg")
    continue
  }
  const decision = prompt("Deseas seguir comprando? Si - No")
  if (decision === "Si") {
    productoElegido = prompt("Elige el producto que deseas comprar: pcgamer-notebook-hardware-accesorios")
  } else {
    seguirComprando = false
  }
}
console.log(carrito);
let totalCompra = 0 
for (const producto of carrito) {
  totalCompra = totalCompra + producto.precio
}
alert("El total de tu compra es: "+totalCompra)

// crear clase Tarjeta

class Tarjeta {
  constructor(nombre, id, tasa3, tasa6, tasa12) {
    this.nombre = nombre
    this.id = id
    this.tasa3 = tasa3
    this.tasa6 = tasa6
    this.tasa12 = tasa12
  }
}


const tarjetas = [
  new Tarjeta("Visa", 1, 20, 25, 30),
  new Tarjeta("Mastercard", 2, 25, 35, 50),
  new Tarjeta("Naranja", 3, 10, 15, 20),
  new Tarjeta("American Express", 4, 25, 30, 35),
]

let tarjetaDeseada = parseInt(
  prompt(
    "Elige el numero de la tarjeta que deseas utilizar! 1. Tarjeta Visa - 2. Tarjeta Mastercard - 3. Tarjeta Naranja - 4. Tarjeta American Express"
  )
)

// variable para condicion de tarjeta
let escogioTarjeta = false

//variable que contiene informacion de la tarjeta elegida
let tarjeta
while (escogioTarjeta === false) {
  tarjeta = tarjetas.find((tarjeta => tarjeta.id === tarjetaDeseada))
  if (!tarjeta) {
    tarjetaDeseada = parseInt(
      prompt(
        "Elige el numero de la tarjeta que deseas utilizar! 1. Tarjeta Visa - 2. Tarjeta Mastercard - 3. Tarjeta Naranja - 4. Tarjeta American Express"
      )
    )
  } else {
    escogioTarjeta = true
  }
}

const cuota3 = calcularCuota(totalCompra, tarjeta.tasa3, 3);
const cuota6 = calcularCuota(totalCompra, tarjeta.tasa6, 6);
const cuota12 = calcularCuota(totalCompra, tarjeta.tasa12, 12);
console.log(cuota3, cuota6, cuota12);

function calcularCuota(totalCompra, tarjeta) {
  const cuota = (totalCompra * tarjeta) / 100 + totalCompra;
  return cuota;
}

alert(
  `El producto con ${tarjeta.nombre} te queda: ${cuota3} en 3 cuotas, ${cuota6} en 6 cuotas y ${cuota12} en 12 cuotas.`
);
