alert("Olá Mundo! Vamos imprimir na console uma tabuada tradicional!");

let numero = prompt("Insere um número para ver a tabuada:");

numero = Number(numero);

if (isNaN(numero)) {
    alert("Por favor insere um número válido!");
} else {
    console.log("=== Tabuada do " + numero + " ===");

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    alert("Tabuada impressa na consola! Abre a console do navegador para ver.");
}
