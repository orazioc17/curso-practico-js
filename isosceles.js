function validarIsosceles(a, b, base) {
    if(a == b && b!=base) {
        return true;
    } else {
        return false;
    }
}

function calcularAltura(a, b) {
    // Se parte la base en 2 para tener un triangulo con angulo recto y asi calcular la altura
    a = a/2;  
    // formula del teorema de pitagoras: c^2 = a^2 + b^2 -> c = raiz(a^2 + b^2)
    // Despejada para nuestro ejercicio en particular: b = raiz(b^2 - a^2)
    let altura = Math.sqrt((b**2) - (a**2));
    return altura
}

// Interaccion con HTML
function validacion() {
    let lado1 = parseFloat(document.getElementById('lado1').value);
    let lado2 = parseFloat(document.getElementById('lado2').value) ;
    let base = parseFloat(document.getElementById('base').value) ;
    let condicion = validarIsosceles(lado1, lado2, base);
    if(condicion == true) {
        let altura = calcularAltura(base, lado1);
        document.getElementById('resultado').innerText = 'Si es un triangulo isosceles y su altura es: ' + altura;
    } else {
        document.getElementById('resultado').innerText = 'No es un triangulo isosceles'
    }
}