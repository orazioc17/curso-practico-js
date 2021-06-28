function calcularModa(lista) {
    const listaCount = {};
    
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1
            }
        }
    );

    // Object entries convierte un objeto a un array
    const listaArray = Object.entries(listaCount).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    );

    console.log(listaArray)

    const moda = listaArray[listaArray.length - 1];
    console.log(moda);
}