let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));

let operacion = prompt("Ingrese una operación (+,-,*,/):");

// let resultado;

if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
        resultado = num1 / num2;
}  else {
    resultado = "Operacion no válida";
}

alert(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);