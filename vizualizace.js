// Načtení Looker Visualization API
let dscc = require('dscc');

// Funkce, která vykreslí data
function drawViz(data) {
    // Vymažeme předchozí obsah
    document.body.innerHTML = '';

    // Vytvoříme základní prvek pro vizualizaci
    const container = document.createElement('div');
    container.style.fontSize = "24px";
    container.style.margin = "20px";
    
    // Získáme data
    const table = data.tables.DEFAULT; // DEFAULT obsahuje hlavní tabulku s daty
    
    // Iterace přes řádky dat
    table.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.textContent = `Dimenze: ${row.dimension[0].value}, Metrika: ${row.metric[0].value}`;
        container.appendChild(rowDiv);
    });

    // Přidáme obsah do těla dokumentu
    document.body.appendChild(container);
}

// Odebírání dat z Looker Studia
dscc.subscribeToData(drawViz);
