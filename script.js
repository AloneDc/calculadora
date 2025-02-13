// Función para agregar contenido a la pantalla
function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Función para limpiar la pantalla
function limpiarPantalla() {
  const display = document.getElementById("display");
  display.value = "";
}

// Función para eliminar el último carácter
function eliminarUltimo() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Función para calcular el factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Función para calcular la expresión
function calcular() {
  const display = document.getElementById("display");
  try {
    // Reemplaza funciones personalizadas y operadores
    let expression = display.value
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/log\(/g, "Math.log(")
      .replace(/log10\(/g, "Math.log10(")
      .replace(/\^/g, "**")
      .replace(/√\(/g, "Math.sqrt(")
      .replace(/factorial\(/g, "factorial(");

    // Evalúa la expresión
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}
