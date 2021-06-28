function calcularMediaArmonica(lista) {
    let denominador = 0;

    for(let i = 0; i < lista.length; i++) {
        if (lista[i] === 0) {
            console.log('La lista no puede contener ceros');
            return
        } else {
            denominador += 1/lista[i];
        }
    };

    const mediaArmonica = lista.length / denominador;
    console.log(mediaArmonica);
}