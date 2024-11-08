import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const input = document.getElementById("inputField")
const boto =  document.getElementById("afegir")
const lista =  document.getElementById("pizzas")

const appConfiguracio = {
    databaseURL: "https://pizzapp-1b275-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp (appConfiguracio);
const baseDades = getDatabase (app);
const task = ref(baseDades, "carrito");

boto.addEventListener("click", function (){
    push (task, input.value);
})

onValue (task, function (snapshot){

    if (snapshot.exists()) {
        let resultats = Object.entries (snapshot.val ())
        clearList()
        console.log ()
        for (let i = 0; i < resultats.length; i++) {
            let current = resultats[i]
            addElement(resultats[i])
        }  
    }else{
        lista.innerHTML = "Add something"
    }
})

