import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const carro = document.getElementById("carrito")
const buton = document.getElementById("Afegir")

const appConfiguracio = {
    databaseURL: "https://pizzapp-1b275-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appConfiguracio);
const baseDades = getDatabase(app);
const carrito = ref(baseDades, "CARRITO");


function addElement (e){
    let c = document.createElement("div")
    c.classList+="col-3"
    //let l = document.createElement("a");
    let elementFoto = document.createElement("img");
    let elementLlista = document.createElement("li");


    elementFoto.src = e[1].imatge
    elementLlista.textContent=e[1].nom



    c.appendChild(elementFoto)
    c.appendChild(elementLlista)


    carro.appendChild(c)
    
}




onValue(carrito, function (snapshot) {

    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val())
        console.log(resultats)


        for (let i = 0; i < resultats.length; i++) {

            addElement(resultats[i])
        }
    }else{
        carro.innerHTML = "Añade unas pizzas al carrito..."
    }

})