//Cuestionario interactivo de Dragon Ball 

//Primero se crea una estructura para poder almacenar nuestras preguntas y respuestas.
const preguntas = [
    {
    pregunta: "¿Quien fue el maestro de artes marciales de Gokú?",
    alternativas: ["Krilin", "kakarotto", "Karin", "Roshi"],
    respuesta: {},
    },
    {
    pregunta: "¿Quien ganó el primer torneo de artes marciales en Dragon ball?",
    alternativas: ["Gokú", "krilin", "Jackie Chun", "Yamcha"],
    respuesta: {},
    },
    {
    pregunta: "¿Quien es hermano de Gokú?",
    alternativas: ["Krilin", "Raditz", "Piccolo", "Vegetta"],
    respuesta: {},
    },
    {
    pregunta: "¿Quien es el primer novio de Bulma?",
    alternativas: ["Yamcha", "Gokú", "Vegetta", "Roshi"],
    respuesta: {},
    },
    {
    pregunta: "¿Cuántas son las esferas del Dragón?",
    alternativas: ["6", "9", "8", "7"],
    respuesta: {},
    },
    {
    pregunta: "¿Como se llama el presentador del Torneo de Artes Marciales?",
    alternativas: ["El anunciador", "Jotaro", "Dio", "Kuno Tattewaki"],
    respuesta: {},
    },
    {
    pregunta: "¿Cómo se llamaba el abuelito de Gokú?",
    alternativas: ["Abuelito", "Tenchiu", "Son Gohan", "Roshi"],
    respuesta: {},
    },
    {
    pregunta: "¿Cómo se llama la esposa de Gokú",
    alternativas: ["Bulma", "kakarotta", "Milk", "Dennisse"],
    respuesta: {},
    },
];

// Se crea la funcion para la encuesta
const crearEncuesta = (preguntas) => {
    return {
        preguntas: preguntas
    }
};

function agregarVoto (pregunta, alternativaSeleccionada){
    if(pregunta.alternativas.includes(alternativaSeleccionada)){
        if(pregunta.respuesta[alternativaSeleccionada]){
            pregunta.respuesta[alternativaSeleccionada]++;
        } else {
            pregunta.respuesta[alternativaSeleccionada] = 1;
        }
    } else {
        console.log("Incorrecto");
    }
};

function mostrarResultado (pregunta) {
    console.log(`Resultado para la pregunta: "${pregunta.pregunta}":`);
    for (let opcion of pregunta.alternativas){
        console.log(`Alternativa "${opcion}": ${pregunta.respuesta[opcion] || 0} votos`);
    }
};

function votar(pregunta) {
    const alternativaSeleccionada = prompt(
        `Pregunta :${pregunta.pregunta} Seleccione una alternativa (${pregunta.alternativas.join(", ")}):`);
    if (alternativaSeleccionada !== null) {
        agregarVoto(pregunta,alternativaSeleccionada.trim());
    } else {
        console.log("¡Adios!");
    }
};

function ejecutarEncuesta(){
    const encuesta = crearEncuesta(preguntas);

    function iniciarEncuesta(){
        for (let i = 0; i < encuesta.preguntas.length; i++){
            votar(encuesta.preguntas[i]);
        }   
    }


iniciarEncuesta();
    let seguirVotando = true;

    while (seguirVotando) {
        seguirVotando = confirm("¿Continuar?");
        if (seguirVotando) {
            iniciarEncuesta();

        }else {
            console.log("Completado.");
        }
    }

    encuesta.preguntas.forEach(mostrarResultado); 

};

ejecutarEncuesta();