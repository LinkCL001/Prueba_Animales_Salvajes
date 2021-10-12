import Animal from "./animal";

export default class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img , comentarios, sonido)
    }
    Aullar()
}
export{Lobo}