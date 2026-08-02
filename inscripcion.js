import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const datos = {
        equipo: document.getElementById("equipo").value,
        capitan: document.getElementById("capitan").value,
        idcod: document.getElementById("idcod").value,
        whatsapp: document.getElementById("whatsapp").value,

        jugador1: formulario.jugador1.value,
        jugador2: formulario.jugador2.value,
        jugador3: formulario.jugador3.value,
        jugador4: formulario.jugador4.value,
        jugador5: formulario.jugador5.value,
        suplente: formulario.suplente.value,

        fecha: new Date()
    };

    try{

        await addDoc(collection(db,"inscripciones"),datos);

        alert("✅ Equipo inscrito correctamente.");

        formulario.reset();

    }catch(error){

        console.error(error);

        alert("❌ Ocurrió un error al guardar la inscripción.");

    }

});
