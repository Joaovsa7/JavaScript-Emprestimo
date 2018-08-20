let nome = prompt("Olá, qual seu nome?");

let idade = Number(prompt("Qual a sua idade?"));

let salario = Number(prompt("Qual o seu salário liquido?"));

let minemprestimo = 1500

let minidade = 22

let maxidade = 60

let emprest = Number(prompt ("Quanto você quer?"));

let parcelas = Number (prompt("Em quantas parcelas?"));

if (idade >= 22 && (idade <= 60 && salario >= 1500 && (emprest  >= 1000 && (10* salario)))) {

    let teste = Math.round(1.6* emprest / parcelas);
    alert(`Será parcelas ${parcelas} de ${teste}`);
}

else { 

    alert(`Empréstimo Reprovado`)
}

parcelas 




