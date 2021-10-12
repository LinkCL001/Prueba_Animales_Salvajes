import Animales from './consulta.js';

document.getElementById("btnRegistrar").addEventListener("click", async () => {     //manejo del dom id creando evento click                                                                                  
    const { animales } = await Animales.getData();
    console.log(animales);
    const animalSeleccionado = document.getElementById("animal").value;
    const informacionAnimales = animales.find((p) => p.name == animalSeleccionado);
    const imgAnimal = `<img width = 200px src="./assets/imgs/${informacionAnimales.imagen}"> `;
    document.getElementById("preview").innerHTML = imgAnimal;

});