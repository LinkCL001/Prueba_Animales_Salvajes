import Animal from "./animal.js";

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Rugir() {
    let rugir = this.getSonido();
    return rugir;
  }
}
export default Leon;
