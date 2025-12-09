alert("Olá Mundo! Adivinha o número em que estou a pensar.")

let numeroSorte = Math.floor(Math.random() * 100) + 1;
console.log("Número sorteado:", numeroSorte);


let adivinhar = prompt('Adivinha o nº da sorte, ente 1 e 100: ')
adivinhar = Math.floor(Number(adivinhar))
console.log('Nº Sorte: ' + numeroSorte, 'Nº Visitante: ' + adivinhar)

let ganhou = false


if (adivinhar < 1 || adivinhar > 100 || isNaN(adivinhar)) {
    alert("Esse número não é válido, recomeça.");
    adivinhar = Number(prompt("Insere um número entre 1 e 100:"));

} else {
    while (!ganhou) {
        if (numeroSorte === adivinhar) {
            alert('Acertaste!!!')

            ganhou = true

        } else if (numeroSorte > adivinhar && numeroSorte - adivinhar <= 2 || numeroSorte < adivinhar && adivinhar - numeroSorte <= 2) {
            alert('Tem certeza?')

            adivinhar = prompt('Adivinha o nº da sorte, ente 1 e 100: ')
            adivinhar = Math.floor(Number(adivinhar))

        } else if (numeroSorte > adivinhar) {
            alert('O número é maior.')
        } else {
            alert('O número é menor.')
        }

        adivinhar = prompt('Adivinha o nº da sorte, ente 1 e 100: ')
        adivinhar = Math.floor(Number(adivinhar))
    }

}



