// Encuesta de Programación Funcional
const crearEncuesta = () => {
    const encuesta = new Encuesta();
    const numPreguntas = parseInt(
        prompt("¡Bienvenido!. Porfavor indica el numero de preguntas a realizar:")
    );

    for (let i = 0; i < numPreguntas; i++) {
        const textoPregunta = prompt(`Ingrese la pregunta ${i + 1}:`);
        const opciones = prompt(
            `Ingrese las opciones para la pregunta ${i + 1} separadas por una coma (,):`
        ).split(",");
        encuesta.agregarPregunta(textoPregunta, opciones);
    }

    return encuesta;
};

const encuesta = crearEncuesta();
encuesta.ejecutar();