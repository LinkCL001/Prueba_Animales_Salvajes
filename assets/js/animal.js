class Animal {
  contructor(nombre = '', edad = '', img = '', comentarios = '', sonido = '') {
    let _nombre = nombre;
    let _edad = edad;
    let _img = img;
    this._comentarios = comentarios;
    let _sonido = sonido;
    this.getNombre = () => _nombre;
    this.getEdad = () => _edad;
    this.getImg = () => _img;
    this.getSonido = () => _sonido;
  }
  get nombre() {
    return this.getNombre;
  }
  get edad() {
    return this.getEdad;
  }
  get img() {
    return this.getImg;
  }
  set comentarios(nuevoComentario) {
    this._comentarios = nuevoComentario;
  }
  get sonido() {
    return this.getSonido;
  }
}
export default Animal