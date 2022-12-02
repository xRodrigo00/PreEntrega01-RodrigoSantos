//CALCULAR VALOR FINAL DE UN PRODUCTO EN FUNCION DE IMPUESTOS Y DESCUENTOS
const IVA = 1.21;
let cocina = 100;
let lavadora = 200;
let heladera = 300;

function descuentos(producto, disponibilidad, descuento) {
  if (disponibilidad == "si" && descuento == 15) {
    let precio_final = producto * IVA - producto * IVA * 0.15;
    console.log("El precio que tiene que pagar es de: " + precio_final);
  } else if (disponibilidad == "si" && descuento == 20) {
    let precio_final = producto * IVA - producto * IVA * 0.2;
    console.log("El precio que tiene que pagar es de: " + precio_final);
  } else if (disponibilidad == "si" && descuento == 25) {
    let precio_final = producto * IVA - producto * IVA * 0.25;
    console.log("El precio que tiene que pagar es de: " + precio_final);
  } else if (disponibilidad == "no") {
    let precio_final = producto * IVA;
    console.log("El precio que tiene que pagar es de: " + precio_final);
  }
}

let producto;
while (producto != "salir") {
  producto = prompt(
    "Seleccione el producto: COCINA - LAVADORA - HELADERA  /  SALIR "
  ).toLowerCase();
  let disponibilidad;
  let descuento;

  if (producto == "cocina") {
    disponibilidad = prompt(
      "Cuenta con algun descuento disponible? SI / NO"
    ).toLowerCase();
    descuento = parseInt(
      prompt("Que cupon de descuento de tiene en %? 15 / 20 / 25")
    );
    descuentos(cocina, disponibilidad, descuento);
  } else if (producto == "lavadora") {
    disponibilidad = prompt(
      "Cuenta con algun descuento disponible? SI / NO"
    ).toLowerCase();
    descuento = parseInt(
      prompt("Que cupon de descuento de tiene en %? 15 / 20 / 25")
    );
    descuentos(lavadora, disponibilidad, descuento);
  } else if (producto == "heladera") {
    disponibilidad = prompt(
      "Cuenta con algun descuento disponible? SI / NO"
    ).toLowerCase();
    descuento = parseInt(
      prompt("Que cupon de descuento de tiene en %? 15 / 20 / 25")
    );
    descuentos(heladera, disponibilidad, descuento);
  } else if (producto != 'salir'){
    console.log("Producto no valido");
  }
}
