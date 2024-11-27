import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const carro = document.getElementById("carrito")
const buton = document.getElementById("Afegir")

const appConfiguracio = {
    databaseURL: "https://pizzapp-1b275-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appConfiguracio);
const baseDades = getDatabase(app);
const carrito = ref(baseDades, "TOPPINGS");


function addElement (e){
    let l = document.createElement("a");
    l.href = e[1].url
    let cont = document.createElement("section")
    let imag = document.createElement("img");
    let titol = document.createElement("h1");
    let buton = document.createElement("button");
    let cesta = document.createElement("carrito");
    let descript = document.createElement ("p");
    let text = document.createElement ("h3");
    
    cont.classList += "toppings"
    imag.classList += "intro-img"
    titol.classList += "titol titol-intro"
    descript.classList += "subtitol subtitol-intro"
    text.classList+="addtopping"

}


onValue(carrito, function (snapshot) {

    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val())
        console.log(resultats)


        for (let i = 0; i < resultats.length; i++) {

            addElement(resultats[i])
        }
    }

})
