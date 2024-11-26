// Encuesta POO de Dragon ball Z
class Preguntas {
    constructor (pregunta1, alternativas) {
        this.pregunta1 = pregunta1;
        this.alternativas = alternativas.map((alternativa) => alternativa.trim())
        this.resultado = {};
    }

agregarVoto(alternativaSeleccionada) {
    if(this.alternativas.includes(alternativaSeleccionada)){
        this.resultado[alternativaSeleccionada] =
            (this.resultado[alternativaSeleccionada] || 0) +1;
    } else {
        console.log("¡Incorrecto!")
    }
}

mostrarRespuesta() {
    console.log(`Resultado de la pregunta: "${this.pregunta1}":`);
    this.alternativas.forEach((alternativa) => {
        console.log(`Opcion "${alternativa}": ${this.resultado[alternativa] || 0} votos`);
    })
}

}
class Encuesta {
    constructor () {
        this.preguntas = [];
    }

    agregarPregunta(pregunta1, alternativas) {
        const pregunta2 = new Preguntas(pregunta1, alternativas);
        this.preguntas.push(pregunta2);
    }
    
    ejecutar(){
        let continuarEncuesta = true;
        while (continuarEncuesta) {
            this.preguntas.forEach((pregunta) => this.votar(pregunta));
            continuarEncuesta = confirm("¿Continuar?");
        }
        this.mostrarResultadoFinal
    }

    votar(pregunta) {
        const alternativaSeleccionada = prompt(
            `Pregunta ${pregunta.pregunta1} Seleccione una alternativa (${pregunta.alternativas.join(", ")});`
        );
        if (alternativaSeleccionada !== null) {
            pregunta.agregarVoto(alternativaSeleccionada.trim());
            
        } else {
            console.log("¡Adios!");
        }
    };

        mostrarResultadoFinal() {
            console.log("Resultado final:");
            this.preguntas.forEach((pregunta) => pregunta.mostrarRespuesta())
    };

};

const crearEncuestaFinal = () => {
    const encuesta = new Encuesta();
    const numeroDePreguntas = parseInt(
        prompt("¿Cuantas preguntas realizarás")
    );

    for (let i = 0; i < numeroDePreguntas; i++) {
        const pregunta1 = prompt(`Ingrese la pregunta ${i + 1}:`);
        const opciones = prompt(`Ingrese las opciones ${i + 1} separadas por una coma (,):`
        ).split(",");
        encuesta.agregarPregunta(pregunta1, opciones);
    }

    return encuesta;
}
 const encuesta = crearEncuestaFinal();
 encuesta.ejecutar();












