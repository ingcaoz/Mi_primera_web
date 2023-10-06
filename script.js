// alert("Hola este es mi Javascript");
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
// let nombre = "marta";
// nombre = "maria";
// const nombre1 = "laura";
////nombre1 = "Carlos";//no se deja cambiar el valor de una constante
// var nombre2 = "Camilo";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

//seleccionar elementos

let contenidoTitulo = "Sobre Mí";

let titulo = document.querySelector(".principal1 .seccion1 .fuente-acento");
titulo.innerHTML =contenidoTitulo;

//condicionales
let textoTitulo = titulo.innerText;
console.log(textoTitulo)

if(textoTitulo ==){

}