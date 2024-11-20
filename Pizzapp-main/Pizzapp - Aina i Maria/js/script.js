import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const input = document.getElementById("inputField")
const buton = document.getElementById("Afegir")
const lista = document.getElementById("pizzas")

const appConfiguracio = {
    databaseURL: "https://pizzapp-1b275-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appConfiguracio);
const baseDades = getDatabase(app);
const pizzas = ref(baseDades, "PIZZAS");
const carrito = ref(baseDades, "CARRITO");
const toppings = ref (baseDades, "TOPPINGS")



onValue(pizzas, function (snapshot) {

    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val())

        for (let i = 0; i < resultats.length; i++) {

            addElement(resultats[i])
        }
    }

})


function addElement(e) {
    let l = document.createElement("a");
    l.href = e[1].url
    let cont = document.createElement("div")
    let imag = document.createElement("img");
    let titol = document.createElement("h1");
    let buton = document.createElement("button");
    let cesta = document.createElement("carrito");

    cont.classList += "container0"
    imag.src = e[1].IMG
    imag.classList += "container img"
    titol.textContent = e[1].NOM

    buton.textContent = "Añadir al carrito"
    buton.classList += "addcarrito"

    var myPizza = new Object();
    myPizza.nom = e[1].NOM;
    myPizza.imatge = e[1].IMG;
    myPizza.preu = e[1].PREU;


    buton.addEventListener("click", function () {
        push(carrito, myPizza);
    })

    let m = document.getElementById("maria");
    l.appendChild(imag)
    cont.appendChild(l)
    cont.appendChild(titol)
    cont.appendChild(buton)
   
    m.appendChild(cont);



}