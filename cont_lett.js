
const dato = "Hola todos";

const contLet  = (letras) => {

const lett = {};

for(let letra of letras ) {
    if(letra in lett) {
        lett[letra] += 1;
    } else {
        lett[letra] = 1;
    }
}

for(let letra in lett) {
    console.log(`${letra} repite ${ lett[letra]}`);
}

}


contLet(dato)