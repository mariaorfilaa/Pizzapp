import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const carro = document.getElementById("carrito")
const buton = document.getElementById("Afegir")

const appConfiguracio = {
    databaseURL: "https://pizzapp-1b275-default-rtdb.europe-west1.firebasedatabase.app/"
}

let pedido = 0;

const app = initializeApp(appConfiguracio);
const baseDades = getDatabase(app);
const carrito = ref(baseDades, "CARRITO");


function addElement (e){

    let c = document.createElement("div")
    c.classList+="col-3"
    let elementFoto = document.createElement("img");
    let elementLlista = document.createElement("li");
    let elementPreu = document.createElement("li");

    pedido += parseFloat(e[1].preu);
    document.getElementById("total").innerHTML = pedido


    
elementFoto.addEventListener("click",function(){
    pedido -= parseFloat(e[1].preu);
    document.getElementById("total").innerHTML = pedido
    let localitzacioItem = ref (baseDades, `CARRITO/${e[0]}`)
        remove (localitzacioItem)
        


})

    elementFoto.src = e[1].imatge
    elementLlista.textContent=e[1].nom
    elementPreu.textContent=e[1].preu



    c.appendChild(elementFoto);
    c.appendChild(elementLlista);
    c.appendChild(elementPreu);


    carro.appendChild(c)
    
}

function clearList (){
    document.getElementById("carrito").innerHTML = ""
}


onValue(carrito, function (snapshot) {
    pedido = 0;
    if (snapshot.exists()) {
        let resultats = Object.entries(snapshot.val())
        console.log(resultats)

        clearList()
        for (let i = 0; i < resultats.length; i++) {
            
            addElement(resultats[i])
        }
    }else{
        
        carro.innerHTML = "Añade unas pizzas al carrito..."
    }

})
