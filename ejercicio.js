function calcularFactorial(numero) {
    if (numero < 0) {
        return "El número debe ser positivo";
    }
    
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    
    return resultado;
}

let pruebas = [4, 5, 7, 0, 10];

for (let j = 0; j < pruebas.length; j++) {
    let num = pruebas[j];
    console.log("El factorial de " + num + " es: " + calcularFactorial(num));
}