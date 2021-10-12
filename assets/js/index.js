import {Leon, Lobo, Oso, Serpiente, Aguila } from "./leon"; "./lobo"; "./oso"; "./serpiente"; "./aguila";
import Animales from './consulta'

let comentarios = [];

document.getElementById("btnRegistrar").addEventListener("click", async () => {     //manejo del dom id creando evento click                                                                                  
  const { animales } = await Animales.getData();
  console.log(animales);
  const animalSeleccionado = document.getElementById("animal").value;
  const informacionAnimales = animales.find((p) => p.name == animalSeleccionado);

  let nombre = document.getElementById("animal");
  let edad = document.getElementById("edad");
  let img = `<img width = 200px src="./assets/imgs/${informacionAnimales.imagen}"> `
  let sonido = `<audio src="./assets/sounds/${informacionAnimales.sonido}"> `

  let nuevoComentario = document.getElementById("comentarios").value;

  if (nombre.value == "Leon"){
    nuevoComentario = new Leon(
      nombre.value,
      edad.value,
      img,
      sonido,
    );
  }
  if (nombre.value == "Lobo"){
    nuevoComentario = new Lobo(
      nombre.value,
      edad.value,
      img,
      sonido,
    );
  }  
  if(nombre.value == "Oso"){
    nuevoComentario = new Oso(
      nombre.value,
      edad.value,
      img,
      sonido,
    );
  }
  if(nombre.value == "Serpiente"){
    nuevoComentario = new Serpiente(
      nombre.value,
      edad.value,
      img,
      sonido,
    );
  }
  if(nombre.value == "Aguila"){
    nuevoComentario = new Aguila(
      nombre.value,
      edad.value,
      img,
      sonido,
    );
  }
  comentarios.push(nuevoComentario);
  console.log(comentarios);
});