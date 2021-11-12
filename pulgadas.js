
// Problema #3 : 

// 65 pulgadas
// 1 yarda es 36 pulgadas
// 1 pie tiene 12 pulgadas
// 1 yarda 2 pies 5 pulgadas


// 65
// 65 -36 = 29  (1)
// 29 . 2 * 12 = 29 -24 = 5 (2)
// 5 pulgadas


const input = 65;

const YARDS = 36;
const PIES = 12;

// Division Modulo Math.floor 

const yardas = Math.floor(input / YARDS);

// 1.8 -> 1 
const resto_yardas = input % YARDS;

const pies = Math.floor(resto_yardas / PIES);
const resto_pies = resto_yardas % PIES;


console.log(`Yardas ${yardas} Pies ${pies} Pulgadas ${resto_pies} `);



















