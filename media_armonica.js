
// Problema 4 La armonica
// a y b
// 1/a y 1/b las inversas
// ((1/a)+(1/b))/2 el promedio
// 1/promedio al media armonica


const mediaArmonica = (a, b) => {

    const aI = 1 / a;
    const bI = 1 / b;
    const prom = (aI + bI) / 2;

    return 1 / prom;
}


console.log(mediaArmonica(6, 9));

