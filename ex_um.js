
alert("Olá Mundo!");


let nome = prompt("Insere o teu nome:");


alert("Olá " + nome + "!");


let artista = prompt("Indica um dos teus artistas multimédia de eleição:");


alert("Não conheço a/o " + artista + "! Eu gosto muito da Mileece: https://www.mileece.is/bio");


let continuar = prompt("Esta página é um arquivo de artistas multimédia. Pretendes continuar? Responde 1 caso sim, ou 0 caso não:");


if (continuar === "1") {
    alert("Ótimo! Vamos continuar!");
} else if (continuar === "0") {
    alert("Obrigado pela visita! Até à próxima!");
} else {
    alert("Resposta inválida! Por favor recarrega a página e tenta novamente.");
}
