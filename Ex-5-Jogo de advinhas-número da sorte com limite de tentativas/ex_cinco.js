let numeroSorte = Math.floor(Math.random() * 10) + 1;
console.log("Número sorteado:", numeroSorte);

let tentativas = 6;

alert("Olá Mundo! Adivinha o número em que estou a pensar. Tens 6 tentativas!");

while (tentativas > 0) {

    let resposta = prompt("Insere um número entre 1 e 10:");
    let numero = Number(resposta);

    if (!Number.isInteger(numero)) {
        alert("Tem de ser um número inteiro! Mas vou processar a tua resposta, porque gosto do Inverno.");
    }

    if (numero < 1 || numero > 10 || isNaN(numero)) {
        alert("Esse número não é válido, recomeça.");
        continue;
    }

    if (numero === numeroSorte) {
        alert("Aacertou!");
        break;
    }

    let distancia = Math.abs(numero - numeroSorte);

    if (distancia <= 2) {
        alert("Está perto!");
    } else if (numero < numeroSorte) {
        alert("O número é maior.");
    } else {
        alert("O número é menor.");
    }

    tentativas--;

    if (tentativas === 1) {
        alert("Última tentativa!");
    }
    else if (tentativas > 1) {
        alert("Ainda possui " + tentativas + " tentativas.");
    }
}

if (tentativas === 0) {
    alert("Está sem tentativas... O número era: " + numeroSorte);
}
