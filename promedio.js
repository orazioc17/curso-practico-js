
function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;

    // lista.forEach(element => {
    //     sumaLista += element
    // });

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );

    const promedioLista = sumaLista / lista.length;
    console.log(promedioLista)
}