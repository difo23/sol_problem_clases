// Crear arreglo mensaje

const mensaje = [
    "_", // 0 espacio en blanco
    "A", // 1
    "B", // 2
    "C", // 3
    "D", // 4
    "F", // 5
    "G", // 6
    "H", // 7
    "I", // 8
    "J", // 9
    "K", // 10
    "L", // 11
    "M", // 12
    "N", // 13
    "O", // 14
    "P", // 15
    "Q", // 16
    "R", // 17
    "S", // 18
    "T", // 19
    "U", // 20
    "V", // 21
    "W", // 22
    "X", // 23
    "Y", // 24
    "Z", // 25
    // Solo abecedario en español
    "CH", // 26
    "LL", // 27
    "Ñ", // 28
];


// Datos para decifrar el mensaje
const datos = [];
datos[0] = [0, 0, 0, 0, 1]; // A
datos[1] = [1, 1, 0, 0, 0]; // Y 
datos[2] = [1, 0, 1, 0, 0]; // U
datos[3] = [0, 0, 1, 0, 0]; // D
datos[4] = [0, 0, 0, 0, 1]; // A
datos[5] = [0, 0, 0, 0, 0]; // _
datos[6] = [0, 0, 0, 0, 1]; // A

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




// Mostar resultado por consola
// Uso de for ... of
for(let dato of datos) {
    console.log(traducir(dato));
}


