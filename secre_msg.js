// Crear arreglo mensaje

const mensaje = [
    " ", // 0
    "A", // 1
    "B", // 2
    "C", // 3
    "D", // 4
    "F", // 5
];


const dato = [0, 0, 1, 0, 1]; // D

const traducir = (code) => {

    // code
    // [0, 0, 0, 0, 1] Bin -> 1 Dec
    //  0  1  2  3  4      index
   

    let sum = 0;

    for(let pos = code.length -1 ; pos >= 0; --pos ) {
        sum += code[pos] * 2 ** (code.length -1 - pos );
    }

    return  mensaje[sum];
}


const result = traducir(dato);

console.log(" Resultado: ",result)

