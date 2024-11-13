import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const input = document.getElementById("inputField")
const buton = document.getElementById("Afegir")
const cesta = document.getElementById("carrito")

const appConfiguracio = {
    databaseURL: "https://pizzapp-1b275-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appConfiguracio);
const baseDades = getDatabase(app);
const carrito = ref(baseDades, "CARRITO");



onValue(carrito, function (snapshot) {

    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val())

        for (let i = 0; i < resultats.length; i++) {

            addElement(resultats[i])
        }
    }

})