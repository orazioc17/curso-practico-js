window.onload = () => {

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

    // Form cuadrado
    const formCuadrado = document.getElementById('formCuadrado');
    formCuadrado.onsubmit = (e) => {
        e.preventDefault();

        const perimetroButton = document.getElementById('perimetroButton');
        perimetroButton.addEventListener('click', () => {
            const lado = parseFloat(document.getElementById('lado').value);
            const perimetro = perimetroCuadrado(lado);
            document.getElementById('resultadoCuadrado').innerText = 'El perimetro del cuadrado es: ' + perimetro;
        });
        
        const areaButton = document.getElementById('areaButton');
        areaButton.addEventListener('click', () => {
            const lado = parseFloat(document.getElementById('lado').value);
            const area = areaCuadrado(lado);
            document.getElementById('resultadoCuadrado').innerText = 'El area del cuadrado es: ' + area;
        });
    }

    // Form Triangulo
    const formTriangulo = document.getElementById('formTriangulo');
    formTriangulo.onsubmit = (e) => {
        e.preventDefault();

        const lado1 = parseFloat(document.getElementById('lado1').value);
        const lado2 = parseFloat(document.getElementById('lado2').value);
        const base = parseFloat(document.getElementById('base').value);
        const altura = parseFloat(document.getElementById('altura').value);

        const perimetroButton = document.getElementById('perimetroTrianguloButton');
        perimetroButton.addEventListener('click', () => {
            const perimetro = perimetroTriangulo(lado1, lado2, base);
            document.getElementById('resultadoTriangulo').innerText = 'El perimetro del triangulo es: ' + perimetro;
        });
        
        const areaButton = document.getElementById('areaTrianguloButton');
        areaButton.addEventListener('click', () => {
            const area = areaTriangulo(base, altura);
            document.getElementById('resultadoTriangulo').innerText = 'El area del triangulo es: ' + area;
        });
    }

    // Form circulo
    const formCirculo = document.getElementById('formCirculo');
    formCirculo.onsubmit = (e) => {
        e.preventDefault();

        let radio = parseFloat(document.getElementById('radio').value);

        const diametro = document.getElementById('diametro');
        diametro.addEventListener('click', () => {
            document.getElementById('resultadoCirculo').innerText = 'El diametro del circulo es: ' + diametroCirculo(radio);
        });

        const perimetro = document.getElementById('perimetroCirculoButton');
        perimetro.addEventListener('click', () => {
            document.getElementById('resultadoCirculo').innerText = 'El perimetro del circulo es: ' + perimetroCirculo(radio);
        });
        
        const area = document.getElementById('areaCirculoButton');
        area.addEventListener('click', () => {
            document.getElementById('resultadoCirculo').innerText = 'El area del circulo es: ' + areaCirculo(radio);
        });
    }
}