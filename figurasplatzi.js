function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo);
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
}

const PI = Math.PI;

function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}

function perimetroCirculo(radioCirculo) {
    return diametroCirculo(radioCirculo) * PI;
}

function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * PI
}

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    let lado = document.getElementById('inputCuadrado').value;
    let resultado = perimetroCuadrado(lado);
    alert('El perimetro del cuadrado es: ' + resultado);
}

function calcularAreaCuadrado() {
    let lado = document.getElementById('inputCuadrado').value;
    let resultado = areaCuadrado(lado);
    alert('El area del cuadrado es: ' + resultado);
}

function calcularPerimetroTriangulo() {
    let lado1 =parseFloat(document.getElementById('lado1').value);
    let lado2 = parseFloat(document.getElementById('lado2').value);
    let base =parseFloat(document.getElementById('base').value);
    let perimetro = perimetroTriangulo(lado1, lado2, base);
    alert('El perimetro del triangulo es: ' + perimetro);
}

function calcularAreaTriangulo() {
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let area = areaTriangulo(base, altura);
    alert('El area del triangulo es: ' + area);
}

function calcularDiametroCirculo() {
    let radio = document.getElementById('radio').value;
    let diametro = diametroCirculo(radio);
    alert('El diametro del circulo es: ' + diametro);
}

function calcularPerimetroCirculo() {
    let radio = document.getElementById('radio').value;
    let perimetro = perimetroCirculo(radio);
    alert('El perimetro del circulo es: ' + perimetro);
}

function calcularAreaCirculo() {
    let radio = document.getElementById('radio').value;
    let area = areaCirculo(radio);
    alert('El area del circulo es: ' + area);
}

