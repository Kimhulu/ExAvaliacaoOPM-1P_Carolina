alert("Olá Mundo!");

let numero = prompt("Insere um número:");

numero = Number(numero);

if (isNaN(numero)) {
    alert("Isso não é um número válido!");
} else {
    if (numero % 2 === 0) {
        alert("O número " + numero + " é par!");
    } else {
        alert("O número " + numero + " é ímpar!");
    }
}
