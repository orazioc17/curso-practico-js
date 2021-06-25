function calcular(monto, descuento) {
    descuento = descuento * monto;
    return monto - descuento;
}

// Interaccion con HTML

function calcularPrecio() {
    let monto = parseFloat(document.getElementById('monto').value);
    let descuento = parseFloat(document.getElementById('cupones').value);
    document.getElementById('resultado').innerText = 'El monto con descuento es: ' + calcular(monto, descuento);
}