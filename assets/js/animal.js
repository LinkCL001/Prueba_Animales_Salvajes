import Animal from "./index.js";

document.getElementById("btnRegistrar").addEventListener("click", async () => {
  //manejo del dom id creando evento click
  const { animales } = await Animal.getData();
  console.log(animales);
  const animalSeleccionado = document.getElementById("animal").value;
  console.log(animalSeleccionado);
  const informacionAnimales = animales.find((p) => p.name == animalSeleccionado).imagen.join(`<img widht="200" src="/assets/imgs/${animalSeleccionado}"/>`);
  console.log(informacionAnimales);
  document.getElementById("Animales").innerHTML = informacionAnimales;

  // document.querySelectorAll(".animales img").forEach((i) => {
  //   i.addEventListener("click", (e) => {
  //     $("#imagenModal").modal("toggle");
  //     const imagenSrc = e.target.src;
  //     document.getElementById(
  //       "preview"
  //     ).style.backgroundImage = `url(${imagenSrc})`;
  //   });
  // });
});

// export default class Animal {
//     contructor(nombre = '', edad = '', img = '', comentarios = '', sonido = ''){
//         let _nombre = nombre;
//         let _edad = edad;
//         let _img = img;
//         this._comentarios = comentarios;
//         let _sonido = sonido;
//         this.getNombre = () => _nombre;
//         this.getEdad = () => _edad;
//         this.getImg = () => _img;
//         this.getSonido = () => _sonido;
//     }
//     get nombre(){
//         return this.getNombre;
//     }
//     get edad(){
//         return this.getEdad;
//     }
//     get img(){
//         return this.getImg;
//     }
//     set comentarios(nuevoComentario){
//         this._comentarios = nuevoComentario;
//     }
//     get sonido(){
//         return this.getSonido;
//     }
// }
