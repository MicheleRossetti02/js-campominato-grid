// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.


let bottone = document.querySelector(".btn")

bottone.addEventListener("click", function(){
    let container = document.querySelector(".container")

    let casella ='<div class="casella"> </div>';
    
    let listaCelle = document.getElementsByClassName("casella");
    
    let numero_caselle = 80;
    
    casellegenerator(numero_caselle, casella, container);
    
    function casellegenerator(numero_caselle, casellaMarkUp, containerEl) {
        
        for (let i = 0; i < numero_caselle; i++) {
            
            containerEl.innerHTML += casellaMarkUp;
        }
        
    }
    
})
