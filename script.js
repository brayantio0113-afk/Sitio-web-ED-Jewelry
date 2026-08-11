/* =========================================
   PRECIOS DEL ORO
   =========================================

   MODIFICA SOLAMENTE LOS NÚMEROS DE AQUÍ.

   El precio corresponde a 1 gramo.

   Ejemplo:
   criollo: 100
   significa que 1 gramo de oro criollo
   cuesta 100.

========================================= */

const preciosOro = {

    criollo: {
        nombre: "Criollo",
        precio: 33
    },

    "10k": {
        nombre: "10 kilates Fábrica",
        precio: 42
    },

    "14k": {
        nombre: "14 kilates",
        precio: 62
    },

    "18k": {
        nombre: "18 kilates",
        precio: 82
    }

};


/* =========================================
   VARIABLES
========================================= */

let categoriaActual = null;

const modal = document.getElementById("calculatorModal");

const calculatorTitle =
    document.getElementById("calculatorTitle");

const goldPrice =
    document.getElementById("goldPrice");

const weightInput =
    document.getElementById("weight");

const calculatedPrice =
    document.getElementById("calculatedPrice");


/* =========================================
   ABRIR CALCULADORA
========================================= */

function abrirCalculadora(categoria) {

    categoriaActual = categoria;

    const producto = preciosOro[categoria];

    if (!producto) {
        return;
    }

    calculatorTitle.textContent = producto.nombre;

    goldPrice.textContent =
        formatearPrecio(producto.precio);

    // Limpiar el peso anterior
    weightInput.value = "";

    calculatedPrice.textContent = "$0.00";

    modal.classList.add("active");

    // Colocar automáticamente el cursor
    setTimeout(() => {
        weightInput.focus();
    }, 100);

}


/* =========================================
   CERRAR CALCULADORA
========================================= */

function cerrarCalculadora() {

    modal.classList.remove("active");

}


/* =========================================
   CALCULAR PRECIO
========================================= */

function calcularPrecio() {

    if (!categoriaActual) {
        return;
    }

    const peso =
        parseFloat(weightInput.value);

    const precio =
        preciosOro[categoriaActual].precio;


    if (isNaN(peso) || peso <= 0) {

        calculatedPrice.textContent = "$0.00";

        return;
    }


    const resultado = peso * precio;


    calculatedPrice.textContent =
        formatearPrecio(resultado);

}


/* =========================================
   FORMATO DEL PRECIO
========================================= */

function formatearPrecio(numero) {

    return new Intl.NumberFormat("es-ES", {

        minimumFractionDigits: 2,
        maximumFractionDigits: 2

    }).format(numero) + " $";

}


/* =========================================
   CERRAR AL HACER CLICK FUERA
========================================= */

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        cerrarCalculadora();

    }

});


/* =========================================
   CERRAR CON LA TECLA ESC
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        cerrarCalculadora();

    }

});
