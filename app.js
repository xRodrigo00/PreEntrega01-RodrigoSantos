//DECLARAMOS LAS VARIABLES DE LOS PRODUCTOS
let cocina = 10000;
let lavadora = 15000;
let heladera = 20000;

function calcularDescuento(precio, descuento) {
  let rebaja;
  if (descuento == "cod10") {
    rebaja = (precio * 10) / 100;
    alert("El descuento que tiene es de " + rebaja + " pesos.");
  } else if (descuento == "cod15") {
    rebaja = (precio * 15) / 100;
    alert("El descuento que tiene es de " + rebaja + " pesos.");
  } else if (descuento == "cod20") {
    rebaja = (precio * 20) / 100;
    alert("El descuento que tiene es de " + rebaja + " pesos.");
  } else {
    rebaja = 0;
    alert("EL CUPON INGRESADO NO ES VALIDO");
  }
  return rebaja;
}

function calcularPrecio(precio) {
  let descuento = prompt("Ingrese el cupon de descuento").toLowerCase();
  let precioFinal = precio - calcularDescuento(precio, descuento);
  return precioFinal;
}

function elegirProducto() {
  producto = prompt("Cocina - Lavadora - Heladera  /  SALIR").toLowerCase();
  let resultado;
  if (producto == "cocina") {
    resultado = calcularPrecio(cocina);
    alert("El monto a pagar es de " + resultado + ' pesos.');
  } else if (producto == "lavadora") {
    resultado = calcularPrecio(lavadora);
    alert("El monto a pagar es de " + resultado + ' pesos.');
  } else if (producto == "heladera") {
    resultado = calcularPrecio(heladera);
    alert("El monto a pagar es de " + resultado + ' pesos.');
  } else if (producto == "salir") {
    alert("Gracias por visitarnos, vuelva pronto!");
  } else {
    alert("No contamos con ese producto.");
  }
}

let producto = alert('Ingrese el producto que desea comprar.')
while (producto != "salir") {
  elegirProducto();
}
