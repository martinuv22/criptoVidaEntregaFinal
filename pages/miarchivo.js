let precio;
const dolar = 323;

function elegircripto() {



    let producto = prompt("Ingresa el numero de la cripto moneda que usted desea comprar \n1)Bitcoin\n2)Ethereum\n3)binance coin\n4)Solana\n");




    while (producto != "s") {
        switch (producto) {
            case "1":

                alert("Un Bitcoin vale $22000 dolares o 7.304.000 pesos argentinos");
                precio = 22000;

                break;
            case "2":
                alert("Un Ethereum $1500 dolares o 498.000 pesos");
                precio = 1500;

                break;
            case "3":
                alert("Un Binance Coin vale $ 450 dolares o 149.400 pesos argentinos ");
                precio = 450;

                break;
            case "4":
                alert("Una Solana vale $ 120 dolares o 39.840 pesos");
                precio = 120;

                break;
            default:
                alert("Intentelo nuevamente");
                elegircripto();
                break;

        }
        producto = prompt("(Apriete (s) para continuar con la compra o en su defecto apriete cualquier otra tecla para volver escojer una criptomoneda para comprar.)");

    }

}
elegircripto();


function pagoCripto() {
    let tipoPago = prompt("Como desea el pago: Ingrese D si lo desea hacer en dolares estadounidenses o Presiones P si lo desea hacer en pesos Argentinos.")
    if ((tipoPago == "P") || (tipoPago == "p")) {
        let cantidadP = prompt("Ingrese la cantidad de criptomonedas que desea comprar.");
        cantidadPrecio = (cantidadP * precio) * dolar;
        alert("Atencion  a pagar sin comision es" + " " + "$" + cantidadPrecio + " " + "pesos argentinos.");
        cantidadPrecio2 = (cantidadPrecio * 1.01)
        alert("Atencion el total a pagar  es" + " " + "$" + cantidadPrecio2 + " " + "pesos argentinos.");
    } else if ((tipoPago == "D") || (tipoPago == "d")) {
        let cantidadD = prompt("Ingrese la cantidad de criptomonedas que desea comprar.");
        cantidadPrecio = (cantidadD * precio)
        alert("Atencion a pagar sin comision es" + " " + "$" + cantidadPrecio + " " + "dolares.");
        cantidadPrecio2 = (cantidadPrecio * 1.01)
        alert("Atencion el total a pagar es" + " " + "$" + cantidadPrecio2 + " " + "dolares.");
    } else {
        alert("Ingrese un comando valido. Volve a intentar");
        pagoCripto();

    }
}
pagoCripto();


alert("Gracias por operar con Criptovida!");