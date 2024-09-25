// This script is used to create a slideshow of images.

// Array of image names
const imagenes = ["atanagildo", "ataulfo", "ervigio", "leovigildo", "recesvinto", "sisebuto"];

// Function to initialize the slideshow
window.onload = inicio;

// Variable to keep track of the current image
let actual = Math.floor(Math.random() * imagenes.length - 1);

// Variable to keep track of the interval for changing the image
let crono;

// Function to initialize the slideshow
function inicio() {
    // Create a div for each image in the array
    for (let k = 0; k < imagenes.length; k++) {
        document.querySelector("#bolitas").insertAdjacentHTML('beforeend', `<div class="bolita" jab="${k}"></div>`);
        document.querySelectorAll(".bolita")[k].onclick = acceder;
    }

    // Change the image initially
    cambiarImagen();

    // Start the interval for changing the image
    crono = setInterval(cambiarImagen, 2000);
}

// Function to change the image when a div is clicked
function acceder() {
    // Clear the interval
    clearInterval(crono);

    // Update the current image
    actual = this.getAttribute("jab");

    // Update the color of the dots
    colorearBolitas();

    // Update the image
    actualizarImagen();

    // Start the interval again
    crono = setInterval(cambiarImagen, 2000);
}

// Function to change the image
function cambiarImagen() {
    // Increment the current image
    actual++;

    // If the current image is greater than the total number of images, reset it to 0
    if (actual >= imagenes.length) {
        actual = 0;
    }

    // Update the image
    actualizarImagen();

    // Update the color of the dots
    colorearBolitas();
}

// Function to update the image
function actualizarImagen() {
    // Update the image source
    document.querySelector("#contenedor").innerHTML = `<img src="img/slider_${imagenes[actual]}.png">`;
}

// Function to update the color of the dots
function colorearBolitas() {
    // Reset the color of all the dots
    for (let k = 0; k < imagenes.length; k++) {
        document.querySelectorAll(".bolita")[k].style.backgroundCOlor = null;
    }

    // Set the color of the current dot
    document.querySelectorAll(".bolita")[actual].style.backgroundCOlor = "orange";
}