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
            peso: 10
        },
        {
            nome: 'hawk',
            peso: 20
        },
        {
            nome: 'thunder',
            peso: 30
        },
    ]
    console.log(bikes);

// destrutturo l'array per estrarre la bici con peso minore 
    const [primoOggetto] = bikes;
    console.log(primoOggetto);

// destrutturo l'oggetto ottenuto per estrarre nome e peso
    const {nome, peso} = primoOggetto;
    console.log('oggetto destrutturato: ', nome, peso);

// stampo a schermo utilizzando template literal 
    const biciLeggera = `
    <h2>Nome: ${nome}</h2>
    <h2>Peso: ${peso}</h2>
    `;

    document.getElementById('bici').innerHTML = biciLeggera;

// --------------------------------------------------------------------------------------------------