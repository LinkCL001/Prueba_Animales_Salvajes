import Leon from "./leon.js";
import Lobo from "./lobo.js";
import Oso from "./oso.js";
import Serpiente from "./serpiente.js";
import Aguila from "./aguila.js";
import Animales from "./consulta.js";

let animalesInvestigados = [];

document.getElementById("btnRegistrar").addEventListener("click", async () => {
  const { animales } = await Animales.getData();
  const nombre = document.getElementById("animal").value;
  const edad = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;
  if (nombre === "" || edad === "" || comentarios === "") {
    alert("Faltan Datos por Llenar");
    return;
  }
  const imgSrc = document.getElementById(`img-${nombre}`).src;
  const img = `<img id="${nombre}" width = 200px src="${imgSrc}"> `;
  const informacionAnimales = animales.find((p) => p.name == nombre);

  let sonido = `${informacionAnimales.sonido}`;
  // document.getElementById("player").innerHTML = sonido;

  let nuevoAnimal;

  if (nombre == "Leon") {
    nuevoAnimal = new Leon(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Lobo") {
    nuevoAnimal = new Lobo(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Oso") {
    nuevoAnimal = new Oso(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Serpiente") {
    nuevoAnimal = new Serpiente(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Aguila") {
    nuevoAnimal = new Aguila(nombre, edad, img, comentarios, sonido);
  }

  animalesInvestigados.push(nuevoAnimal);

  reloadTable();
  document.getElementById("animal").selectedIndex = 0;
  document.getElementById("edad").selectedIndex = 0;
  document.getElementById("comentarios").value = "";
  document.getElementById("preview").innerHTML = "";
});

const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = "";
  animalesInvestigados.forEach((a) => {
    animalesTemplate.innerHTML += `<div class="px-3 pb-2 animales""${a.getNombre()}">
    <div class="card">${a.getImg()}
        <div class="card-body">
          <h4 class="card-tittle">${a.getNombre()}</h4>
          <hr class="w-50 mx-auto">
          <h6 class="card-text">Edad: ${a.getEdad()}</h6>
          <h6 class="card-text">Comentarios: <span class="text-dark">${a.getComentarios()}</span></h6>
          <button class="btn btn-outline-warning" onclick="playAudio(sonido${a.getNombre()})">Sonido</button>
          <audio id="sonido${a.getNombre()}"> <source src="./assets/sounds/${a.getSonido()}" type="audio/mpeg"></audio>
        </div>
    </div>
  </div>
  `;
  });
};

document.getElementById("animal").addEventListener("change", async () => {
  const { animales } = await Animales.getData();
  const nombre = document.getElementById("animal").value;
  const informacionAnimales = animales.find((p) => p.name == nombre);
  document.getElementById(
    "preview"
  ).innerHTML = `<img id="img-${nombre}" width = 200px src="./assets/imgs/${informacionAnimales.imagen}"> `;
});
