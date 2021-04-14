// 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// 2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// 1.
// definisco array di oggetti
    const bikes = [
        {
            nome: 'graziella',
            peso: 30
        },
        {
            nome: 'hawk',
            peso: 20
        },
        {
            nome: 'thunder',
            peso: 10
        },
    ]
    console.log(bikes);

// utilizzo ciclo per estrarre l oggetto bici con peso minore
    // di default definisco variabile bicileggera
    let biciLeggera = bikes[0];
    
    for (let i = 0; i < bikes.length; i++) {
        let thisBike = bikes[i];

        // se la bici trovata è più leggera della bici leggera di default, questa diventerà la bici più leggera 
        if (thisBike.peso < biciLeggera.peso) {
            biciLeggera = thisBike;
        }

    }
    console.log(biciLeggera);

// destrutturo l'oggetto ottenuto per estrarre nome e peso
    let {nome, peso} = biciLeggera;
    console.log('oggetto destrutturato: ', nome, peso);

// stampo a schermo utilizzando template literal 
    biciLeggera = `
    <h2>Nome: ${nome}</h2>
    <h2>Peso: ${peso}</h2>
    `;

    document.getElementById('bici').innerHTML = biciLeggera;

// --------------------------------------------------------------------------------------------------

// 2.

