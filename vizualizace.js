// Načtení knihovny dscc pro komunikaci s daty v Looker Studiu
let dscc = require('dscc');

// Funkce pro vykreslení vizualizace
function drawViz(data) {
    // Vytvoření divu, který bude obsahovat vizualizaci
    const div = document.createElement('div');
    div.style.fontSize = "24px";
    div.textContent = "Toto je vlastní vizualizace!";
    
    // Přidání divu do těla dokumentu
    document.body.appendChild(div);
}

// Předplatné na data pro automatickou aktualizaci při změně dat v Looker Studiu
dscc.subscribeToData(drawViz);
