import Leon from "./leon.js"; 
import Lobo from "./lobo.js";
import Oso from "./oso.js";
import Serpiente from "./serpiente.js";
import Aguila from "./aguila.js";
import Animales from './consulta.js';

let animalesInvestigados = []

document.getElementById("btnRegistrar").addEventListener("click", async () => {
  const { animales } = await Animales.getData();  
  const animalSeleccionado = document.getElementById("animal").value;
  const informacionAnimales = animales.find((p) => p.name == animalSeleccionado);
  let nombre = document.getElementById("animal").value;
  let edad = document.getElementById("edad").value;
  let img = `<img width = 200px src="./assets/imgs/${informacionAnimales.imagen}"> `;
  document.getElementById("preview").innerHTML = img;
  let sonido = `${informacionAnimales.sonido}`;
  document.getElementById("player").innerHTML = sonido;
  let comentarios = document.getElementById("comentarios").value;

  
  let nuevoAnimal;

  if (nombre == "Leon"){
    nuevoAnimal = new Leon(nombre, edad, img, comentarios, sonido)
  }
  else if (nombre == "Lobo"){
    nuevoAnimal = new Lobo(nombre, edad, img, comentarios, sonido)
  }  
  else if (nombre == "Oso"){
    nuevoAnimal = new Oso(nombre, edad, img, comentarios, sonido)
  }
  else if (nombre == "Serpiente"){
    nuevoAnimal = new Serpiente(nombre, edad, img, comentarios, sonido)
  }
  else if (nombre == "Aguila"){
    nuevoAnimal = new Aguila(nombre, edad, img, comentarios, sonido)
  }
  if (nombre && edad && img && comentarios){
  animalesInvestigados.push(nuevoAnimal);
  
  comentarios = "";
  reloadTable();
  } else {
    alert("Faltan Datos por Llenar")
  }
  
});

const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = "";
  animalesInvestigados.forEach((a) => {
    animalesTemplate.innerHTML +=
    `<div class="px-3 pb-2 animales""${a.getNombre()}">
    <div class="card">${a.getImg()}
        <div class="card-body">
          <h4 class="card-tittle">${a.getNombre()}</h4>
          <hr class="w-50 mx-auto">
          <h6 class="card-text">Edad: ${a.getEdad()}</h6>
          <h6 class="card-text">Comentarios: <span class="text-dark">${a.getComentarios()}</span></h6>
          <button class="btn btn-outline-warning" onclick="sonido.play()"('${a.getSonido()}')">Sonido</button>
        </div>
    </div>
  </div>
  `
  })
}
// window.activarSonido = (i) => {
//   const animal  = animal[i];
//   if (animal.getNombre == "Leon"){
//     animal.Rugir();
//   } else if (animal.getNombre == "Lobo"){
//     animal.Aullar();
//   }
//   else if (animal.getNombre == "Oso"){
//     animal.Grunir();
//   }
//   else if (animal.getNombre == "Serpiente"){
//     animal.Sisear();
//   }
//   else if (animal.getNombre == "Aguila"){
//     animal.Chillar();
//   }
//   reloadTable();
// };

// document.getElementsByClassName("card").addEventListener("click",{

// })
