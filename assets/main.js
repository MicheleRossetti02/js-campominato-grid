// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.


// selexione il bottone
let bottone1 = document.querySelector(".aqua")

// assegno un azione al bottone
bottone1.addEventListener("click", function(){

    // // struttura del container
    // let container = document.querySelector(".container")
    // let casella =`<div class="casella">   </div>`;

    // // assegno un numero alle caselle
    // let numero_caselle = 100;
    
    // // richiamo la function
    // casellegenerator(numero_caselle, casella, container);
    

    // // funzione che genera le caselle
    // function casellegenerator(numero_caselle, casellaMarkUp, containerEl) {
        
    //     for (let i = 0; i < numero_caselle; i++) {
            
    //         containerEl.innerHTML += casellaMarkUp;
    //         // casellaMarkUp.innerText += numero_caselle;
    //     }
        
    // }



   // struttura del container
    let container = document.querySelector(".container")

    // assegno un numero alle caselle
    let numero_caselle = 101;
    
    // richiamo la function
    casellegenerator(numero_caselle, container);
    

    // funzione che genera le caselle
    function casellegenerator(numero_caselle, containerEl) {
        
        for (let i = 1; i < numero_caselle; i++) {


            let casella =`<div class="casella"> ${i}  </div>`;
            containerEl.innerHTML += casella;

            // casellaMarkUp.innerText += numero_caselle;
        }
        
    }







    
})




// selexione il bottone
let bottone2 = document.querySelector(".violet")

// assegno un azione al bottone
bottone2.addEventListener("click", function(){



   // struttura del container
    let container = document.querySelector(".container")

    // assegno un numero alle caselle
    let numero_caselle = 82;
    
    // richiamo la function
    casellegenerator(numero_caselle, container);
    

    // funzione che genera le caselle
    function casellegenerator(numero_caselle, containerEl) {
        
        for (let i = 1; i < numero_caselle; i++) {


            let casella =`<div class="casella_2"> ${i}  </div>`;
            containerEl.innerHTML += casella;

            // casellaMarkUp.innerText += numero_caselle;
        }
        
    }







    
})




// selexione il bottone
let bottone3 = document.querySelector(".green")

// assegno un azione al bottone
bottone3.addEventListener("click", function(){




   // struttura del container
    let container = document.querySelector(".container")

    // assegno un numero alle caselle
    let numero_caselle = 50;
    
    // richiamo la function
    casellegenerator(numero_caselle, container);
    

    // funzione che genera le caselle
    function casellegenerator(numero_caselle, containerEl) {
        
        for (let i = 1; i < numero_caselle; i++) {


            let casella =`<div class="casella_3"> ${i}  </div>`;
            containerEl.innerHTML += casella;

            // casellaMarkUp.innerText += numero_caselle;
        }
        
    }







    
})
