import Animal from "./animal.js";

export default class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img , comentarios, sonido)
    }
    Chillar(){
        let chillar = this.getSonido();
        return chillar
    }
}
export{Aguila};