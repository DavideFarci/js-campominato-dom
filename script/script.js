/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

// selezionare gli elementi del DOM necessari

const loser = document.querySelector("#lose");
const titlePoints = document.querySelector("#h2");

//selezionare il bottone per creare la griglia 
const eleButton = document.querySelector("#btn");



eleButton.addEventListener("click", function () {
    let score = 0;
    //Array per le bombe
    const num = [];
    const eleGrid = document.querySelector('.grid');
    const eleDifficulty = document.getElementById("difficulty");
    let value = eleDifficulty.options[eleDifficulty.selectedIndex].value;
    console.log(value);
    document.querySelector("#score").innerHTML = "";
    eleGrid.classList.remove("not_clickable");
    loser.classList.add("hidden");

    
    
    // generare la griglia in base alla difficoltà scelta
    if (value == "100") {
        getRandom(1, 100, num);
        eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
        eleGrid.classList.add("grid_easy");
        createGrid(100, eleGrid);
    } else if (value == "81") {
        getRandom(1, 81, num);
        eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
        eleGrid.classList.add( "grid_medium");
        createGrid(81, eleGrid);
    } else if (value == "49") {
        getRandom(1, 49, num);
        eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
        eleGrid.classList.add("grid_hard");
        createGrid(49, eleGrid);
    }
    
    // debugger
    const listCells = document.querySelectorAll('.cell');
    // applicare gli event listeners a tutte le celle della griglia
    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click', function() {
            if (num.includes(i + 1)) {
                console.log("hai cliccato la cella " + this.innerHTML);
                this.classList.toggle("bomb");
                eleGrid.classList.add("not_clickable");
                loser.classList.remove("hidden");
                titlePoints.classList.remove("hidden");
                document.querySelector("#score").innerHTML = score;
                // console.log("hai perso");
            } else {
                console.log("hai cliccato la cella " + this.innerHTML);
                this.classList.toggle('clicked');
                score++;
            }
        })
    }
    
});


