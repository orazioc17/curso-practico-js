function calcularDescuento(precio, descuento) {
    let montoDescuento = precio * (descuento/100);
    return precio - montoDescuento;
}

const coupons = [
    {
        name: "Hola mundo",
        discount: 15,
    },
    {
        name: "foo",
        discount: 30,
    },
    {
        name: "bar",
        discount: 25,
    },
];

function calcular() {
    const inputPrice = document.getElementById('monto');
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById('cupon');
    const couponValue = inputCoupon.value;
    
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
  
        const precioConDescuento = calcularDescuento(priceValue, descuento);
  
        const resultP = document.getElementById("resultado");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}