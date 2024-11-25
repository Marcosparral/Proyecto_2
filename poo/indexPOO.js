// Encuesta POO de Dragon ball Z
class Preguntas {
    constructor (pregunta, alternativas) {
        this.pregunta = pregunta;
        this.alternativas = alternativas.map((alternativa) => alternativa.trim());
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

mostrarRespuesta(){
    console.log(`Respuesta: "${this.pregunta}":`);
    this.alternativas.forEach((alternativa)=> {
        console.log(`Alternativa "${alternativa}": ${this.resultado[alternativa] || 0} votos `);    
    });
}
}


class Encuesta {
    constructor (){
        this.Preguntas = [];
    }

    ejecutar(){
        let continuarEncuesta = true;
        while (continuarEncuesta) {
            this.Preguntas.forEach((pregunta) => this.votar(pregunta));
            continuarEncuesta = confirm("¿Continuar?");
        }
    }

    votar(pregunta) {
        const alternativaSeleccionada = prompt (
            `Pregunta ${pregunta.pregunta} Seleccione una alternativa (${pregunta.alternativas.join(", ")});`
        );
        if (alternativaSeleccionada !== null) {
            pregunta.agregarVoto(alternativaSeleccionada.trim());
            console.log("Alternativa seleccionada", alternativaSeleccionada);
            console.log("resultado encuesta: ");
            this.Preguntas.forEach((pregunta) => pregunta.mostrarRespuesta());
        } else {
            console.log("¡Adios!");
        }
    }
};





const encuesta = new Encuesta();

encuesta.Preguntas = [
    new Preguntas("¿Quién fue el maestro de artes marciales de Gokú?", ["Krilin", "Kakarotto", "Karin", "Roshi"]),
    new Preguntas("¿Quién gano el primer torneo de artes marciales en Dragon Ball?", ["Goku", "Krilin", "Jackie Chun", "Yamcha"]),
    new Preguntas("¿Quien es el hermano de Goku?", ["krilin", "raditz", "piccolo", "Vegetta"]),
    new Preguntas("¿Quién es el primer novio de Bulma?", ["Yamcha", "Goku", "Vegetta", "Roshi"]),
    new Preguntas("¿Cuantas son las esferas del Dragon?", ["6", "9", "8", "7"]),
    new Preguntas("¿Como se llama el presentador del torneo de Artes Marciales?", ["El anunciador", "Jotaro", "Dio", "Kuno Tattewaki"]),
    new Preguntas("¿Como se llamaba el abuelito de Goku?", ["Abuelito", "Tenchiu", "Son Gohan", "Roshi"]),
    new Preguntas("¿Como se llama la esposa de Goku?", ["Bulma", "Kakarotta", "Milk", "Dennisse"]),
];

encuesta.ejecutar();