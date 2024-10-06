// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Valores iniciales para definir el color RGB.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
  textoRojo.textContent = rojo;
  textoVerde.textContent = verde;
  textoAzul.textContent = azul;
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('change', (e) => {
  // Actualiza el valor de la variable rojo con el valor del input
  rojo = e.target.value;
  // Llama a la función para actualizar el color de fondo
  actualizarColor(rojo, verde, azul);
});

// Event listener para el input de verde
inputVerde.addEventListener('change', (e) => {
  verde = e.target.value;
  actualizarColor(rojo, verde, azul);
});

// Event listener para el input de azul
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;
  actualizarColor(rojo, verde, azul);
});
