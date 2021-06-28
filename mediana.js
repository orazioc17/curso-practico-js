
function esPar(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

function calcularMediana(lista) {
    lista.sort((a, b) => a - b)
    console.log(lista)

    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        let mediana = lista[mitadLista - 1] + lista[mitadLista];
        mediana = mediana / 2;
        console.log(mediana);
    } else {
        let mediana = lista[mitadLista];
        console.log(mediana);
    }
}


