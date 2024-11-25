const crearPregunta = (nuevaPregunta, opciones) => {
    return {
        nuevaPregunta: nuevaPregunta,
        opciones: opciones,
        resultado: {}
    };
};
const nuevaEncuesta = (preguntas) => {
    return {
        preguntas: preguntas,
    };
};

function agregarVoto (pregunta, alternativaSeleccionada) {
    if(pregunta.opciones.includes(alternativaSeleccionada)){
        if(pregunta.opciones[alternativaSeleccionada]) {
            pregunta.opciones[alternativaSeleccionada]++;
        } else {
            pregunta.opciones[alternativaSeleccionada] = 1;
        }
        mostrarResultado(pregunta);
    } else {
        console.log("Incorrecto");
    }
}

function mostrarResultado (pregunta) {
    console.log(`Resultado para la pregunta: "${pregunta.nuevaPregunta}":`);
    for (let opcion of pregunta.opciones) {
        console.log(`Alternativa "${opcion}": ${pregunta.resultado[opcion] || "no hay"} votos`);
    }
};

function votar(pregunta) {
    const alternativaSeleccionada = prompt(
        `Pregunta: ${pregunta.nuevaEncuesta} Seleccione una alternativa (${pregunta.opciones.join(", ")}):`
    );
    
    if (alternativaSeleccionada !== null) {
        agregarVoto(pregunta,alternativaSeleccionada.trim());
    } else {
        console.log("¡Adios!");
    }
};

function ejecutarEncuesta(){
    const numPreguntas = parseInt(prompt("Bienvenido. ¿Cuantas preguntas harás?")
    );
    const preguntas = [];

    for (let i = 0; i < numPreguntas; i++) {
        const nuevaPregunta = prompt(`Pregunta ${i + 1}":`);
        const opciones = prompt(
            `Ingrese las opciones separadas por una coma (,):`
        )
            .split(",")
            .map((opcion) => opcion.trim());
        const pregunta = crearPregunta(nuevaPregunta, opciones);
        preguntas.push(pregunta);
    }
    



    const encuesta = nuevaEncuesta(preguntas);
    
    let seguirVotando = true;
    while (seguirVotando) {
        for(let i = 0;i < numPreguntas; i++) {
            votar(encuesta.preguntas[i]);
        }
            seguirVotando = confirm("¿Continuar?");
    
    };

    console.log("resultados:");
    encuesta.preguntas.forEach(mostrarResultado);
    

}

ejecutarEncuesta();