let precioDolare= parseFloat (prompt("Ingrese el precio del producto en dólares"));

let valorDolar = 1130;
let iva = 0.21;

let precioPesos = precioDolares * valorDolar;

let precioFinal = precioPesos + (precioPesos * iva);

alert(`El precio final con IVA es: $${precioFinal.toFixed(2)} pesos.`);

