import Animal from "./animal.js";

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Grunir() {
    let grunir = this.getSonido();
    return grunir;
  }
}
export default Oso;
