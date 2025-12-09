alert("Olá Mundo! Vamos fazer contas simples.");

let operacao = prompt("Qual operação queres realizar? (soma, subtração, multiplicação, divisão)");
if (operacao) operacao = operacao.toLowerCase();

if (operacao !== "soma" && operacao !== "subtração" && operacao !== "subtracao" &&
    operacao !== "multiplicação" && operacao !== "multiplicacao" &&
    operacao !== "divisão" && operacao !== "divisao") {

    alert("Operação inválida");
} else {

    let num1 = Number(prompt("Insere o número à esquerda da operação: "));

    let num2 = Number(prompt("Insere o número à direita da operação: "));

    let resultado;
    let simbolo;

    switch (operacao) {
        case "soma":
            resultado = num1 + num2;
            simbolo = "+";
            break;

        case "subtração":
        case "subtracao":
            resultado = num1 - num2;
            simbolo = "-";
            break;

        case "multiplicação":
        case "multiplicacao":
            resultado = num1 * num2;
            simbolo = "×";
            break;

        case "divisão":
        case "divisao":
            resultado = num1 / num2;
            simbolo = "÷";
            break;
    }

    let textoFinal = `${num1} ${simbolo} ${num2} = ${resultado}`;
    console.log(textoFinal);
    alert(textoFinal);
}
