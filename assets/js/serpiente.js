import Animal from "./animal.js";

export default class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img , comentarios, sonido)
    }
    Sisear(){
        let sisear = this.getSonido();
        return sisear
    }
}
export{Serpiente};