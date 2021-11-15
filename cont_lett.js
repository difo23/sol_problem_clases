const dato = "Hola todos";

const contLet = (letras) => {

    // letras -> Hola todos

    const lett = {};
    // For of : Util para strings y arreglos
    for (let letra of letras) {
        if (letra in lett) {
            // letra repetida
            lett[letra] += 1;
        } else {
            // letra nueva
            lett[letra] = 1;
        }
    }

    /*  H repite 1
        o repite 3
        l repite 1
        a repite 1
          repite 1
        t repite 1
        d repite 1
        s repite 1
    */
    // For in: Util para objetos
    for (let letra in lett) {
        // Letra es la clave de mi objecto
        console.log(`${letra} repite ${lett[letra]}`);
    }

}


contLet(dato)