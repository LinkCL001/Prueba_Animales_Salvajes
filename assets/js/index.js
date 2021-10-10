// import Animal from "./animal.js";

let animales = (() => {                                                         //variable con modulo IIFE
    const url = "http://localhost:5500/animales.json";                          //url live server .json
    const getData = async () => {                                               //funcion asincrona
        const res = await fetch(url);                                           //almacena await de un fetch
        const data = await res.json();                                          //esperar que se resuelva la promesa del metodo json
        return data;                                                             // retornar data
    }
    return { getData };                                                         //retornar dentro de un objeto
})();
export default animales;// de este archivo exportar variable animales

//1. Crear las clases representadas en el diagrama implementando la herencia indicada.
//2. Crear las instancias de las clases utilizando los datos del formulario.
//3. Realizar una consulta asíncrona utilizando una función async/await para obtener las imágenes correspondientes a los animales.
//4. Realizar por lo menos una función autoejecutable IIFE.
//5. Dividir el código en módulos.
//6. Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados con el formulario.
//(Opcional)
//7. Validar que el usuario haya asignado todos los datos del animal antes de que éste sea agregado a la tabla. (
//8. Devolver el formulario en un estado inicial luego de registrar a cada animal.
//9. Programar la interacción del botón de audio, en donde deberás reproducir el sonido del animal en el sitio web.
//10. Mostrar el detalle de cada animal en una ventana modal al ser presionada su imagen.

