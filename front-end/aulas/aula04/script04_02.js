let a,b;
a=prompt("Digite um número");
a=parseInt(a);
b=parseInt(prompt("Digite outro número")); //parseInt, é a transformação do numero que você quer, podendo usar parseFloat para números quebrados
document.write (`A soma entre ${a} por ${b} é: ${(a+b)} <br>`);
document.write (`A subtração entre ${a} por ${b} é: ${(a-b)} <br>`);
document.write (`A multiplicação de ${a} por ${b} é: ${a*b} <br>`);
document.write(`A divisão de ${a} por ${b} é: ${a/b} <br>`);
document.write(`O resto da divisão entre ${a} por ${b} é: ${a%b} <br>`);
document.write(`A potência entre ${a} por ${b} é: ${a**b} <br>`);