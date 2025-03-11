let miListaDePendientes = ["Sense8", "Tokyo Ghoul", "Amanecer", "Strong"];

let nuevaPelicula = prompt("Ingresa una película o serie que quieras ver:");

miListaDePendientes.push(nuevaPelicula);

miListaDePendientes[1] = "The Last of Us";

console.log("Lista de películas o series por ver:");
console.log(miListaDePendientes);