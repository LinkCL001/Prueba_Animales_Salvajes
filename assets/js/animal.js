class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    let Nombre = nombre;
    let Edad = edad;
    let Img = img;
    let Comentarios = comentarios;
    let Sonido = sonido;

    this.getNombre = () => Nombre;
    this.getEdad = () => Edad;
    this.getImg = () => Img;
    this.getSonido = () => Sonido;
    this.getComentarios = () => Comentarios;
    this.setComentarios = (comentarios) => (Comentarios = comentarios);
  }
  get Nombre() {
    return this.getNombre()
  }
  get Edad() {
    return this.getEdad()
  }
  get Img() {
    return this.getImg()
  }
  get Sonido() {
    return this.getSonido()
  }
  get Comentarios(){
    return this.getComentarios()
  }
  set Comentarios(comentarios){
    return this.getComentarios(comentarios)
  }
}
export default Animal;
