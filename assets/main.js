// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.


// selexione il bottone
let bottone = document.querySelector(".btn")

// assegno un azione al bottone
bottone.addEventListener("click", function(){

    // struttura del container
    let container = document.querySelector(".container")
    let casella =`<div class="casella">  </div>`;

    // assegno un numero alle caselle
    let numero_caselle = 100;
    
    // richiamo la function
    casellegenerator(numero_caselle, casella, container);
    

    // funzione che genera le caselle
    function casellegenerator(numero_caselle, casellaMarkUp, containerEl) {
        
        for (let i = 0; i < numero_caselle; i++) {
            
            containerEl.innerHTML += casellaMarkUp;
            // casellaMarkUp.innerText += numero_caselle;
        }
        
    }
    
})
