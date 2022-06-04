let preguntas = [
    "Inteligencia Artificial",
    "Agentes", 
    "Agentes Humanos", 
    "Agentes Artificiales", 
    "Agente Racional",
    "Características de un Agente",
    "Agentes triviales",
    "Agentes inteligentes",
    "Lógica",
    "Redes Semánticas",
    "Características de las Redes Semánticas",
    "Tipos de Arcos",
    "Concepto de redes semánticas",
    "Inferencia por equiparación",
    "Adecuación de las redes semánticas",
    "Dificultades de las redes semánticas",
    "Agente resolve de problemas",
    "Espacio de estados",
    "El nodo tiene:",
    "Condiciones de un búsqueda",
    "Busqueda no informada",
    "Busqueda A*",
    "Heuristica admisible",
    "Redes neuronales",
    "Funcion de red o de propagacion:",
    "Ventajas que ofrecen las RNA",
    "Desventajas que ofrecen las RNA"



];
let respuestas = [
    "respuestas/r1.png",
    "respuestas/r2.png",
    "respuestas/r3.png",
    "respuestas/r4.png",
    "respuestas/r5.png",
    "respuestas/r6.png",
    "respuestas/r7.png",
    "respuestas/r8.png",
    "respuestas/r9.png",
    "respuestas/r10.png",
    "respuestas/r11.png",
    "respuestas/r12.png",
    "respuestas/r13.png",
    "respuestas/r14.png",
    "respuestas/r15.png",
    "respuestas/r16.png",
    "respuestas/r17.png",
    "respuestas/r18.png",
    "respuestas/r19.png",
    "respuestas/r20.png",
    "respuestas/r21.png",
    "respuestas/r22.png",
    "respuestas/r23.png",
    "respuestas/r24.png",
    "respuestas/r25.png",
    "respuestas/r26.png",
    "respuestas/r27.png",
]

let pregunta = document.getElementById("pregunta"),
    respuesta = document.getElementById("respuesta"),
    contador = document.getElementById("contador"),
    botonCorrecto = document.getElementById("botonCorrecto"),
    botonIncorrecto = document.getElementById("botonIncorrecto");
    botonComenzar = document.getElementById("botonComenzar"),
    botonSiguiente = document.getElementById("botonSiguiente"),
    sectionComenzar = document.getElementById("sectionComenzar"),
    sectionPregunta = document.getElementById("sectionPregunta"),
    sectionRespuesta = document.getElementById("sectionRespuesta"),
    sectionBotones = document.getElementById("sectionBotones"),
    sectionContinuar = document.getElementById("sectionContinuar");

//numero random entre 0 y 27
let numeroRandom = Math.floor(Math.random() * 27);
let listadoNumeros = [numeroRandom];
let contadorPreguntas = 0;
let contadorCorrectas = 0;

let funcionNuevaPregunta = function() {
    contadorPreguntas++;
    contador.className = "";
    contador.innerHTML = "Pregunta " + contadorPreguntas + " de 10";
    sectionComenzar.className = "visually-hidden";
    sectionPregunta.className = "";
    pregunta.innerHTML = preguntas[numeroRandom];
    sectionRespuesta.className = "visually-hidden";
    respuesta.innerHTML = "<img src='" + respuestas[numeroRandom] + "'>";
    sectionBotones.className = "";
    sectionContinuar.className = "visually-hidden";
    numeroRandom = Math.floor(Math.random() * 27);
    while (listadoNumeros.includes(numeroRandom)) {
        numeroRandom = Math.floor(Math.random() * 27);
    }
    listadoNumeros.push(numeroRandom);
}

botonComenzar.addEventListener("click", funcionNuevaPregunta);

let funcionCorreccion = function(correcto) {
    if (correcto) {
        contadorCorrectas++;
    }
    if (contadorPreguntas < 10) {
        sectionRespuesta.className = "";
        sectionBotones.className = "visually-hidden";
        sectionContinuar.className = "";
    } else {
        sectionRespuesta.className = "";
        sectionBotones.className = "visually-hidden";
        sectionPregunta.className = "";
        contador.innerHTML = "Has acertado " + contadorCorrectas + " de 10 preguntas";
    }
}

botonCorrecto.addEventListener("click", funcionCorreccion.bind(null, true));
botonIncorrecto.addEventListener("click", funcionCorreccion.bind(null, false));
botonSiguiente.addEventListener("click", funcionNuevaPregunta);

