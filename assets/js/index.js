import {Leon} from "./leon.js"; 
import {Lobo} from "./lobo.js";
import {Oso} from "./oso.js";
import {Serpiente} from "./serpiente.js";
import {Aguila} from "./aguila.js";

let animales = [];

document.getElementById("btnRegistrar").addEventListener("click", () => {     //manejo del dom id creando evento click                                                                                  
  let nombre = document.getElementById("animal");
  let edad = document.getElementById("edad");
  let previewImg = document.getElementById("preview");
  let imagenSrc = previewImg.style.backgroundImage;
  let imgSrc = imagenSrc.slice(5, imagenSrc.length - 2);
  let sonido = document.getElementById("player");
  let comentarios = document.getElementById("comentarios");

  let nuevoAnimal;

  if (nombre.value == "Leon"){
    nuevoAnimal = new Leon(
      nombre.value,
      edad.value,
      imgSrc,
      sonido,
      comentarios.value,
    );
  }
  else if (nombre.value == "Lobo"){
    nuevoAnimal = new Lobo(
      nombre.value,
      edad.value,
      imgSrc,
      sonido,
      comentarios.value,
    );
  }  
  else if(nombre.value == "Oso"){
    nuevoAnimal = new Oso(
      nombre.value,
      edad.value,
      imgSrc,
      sonido,
      comentarios.value,
    );
  }
  else if(nombre.value == "Serpiente"){
    nuevoAnimal = new Serpiente(
      nombre.value,
      edad.value,
      imgSrc,
      sonido,
      comentarios.value,
    );
  }
  else if(nombre.value == "Aguila"){
    nuevoAnimal = new Aguila(
      nombre.value,
      edad.value,
      imgSrc,
      sonido,
      comentarios.value,
    );
  }
  animales.push(nuevoAnimal);
});

