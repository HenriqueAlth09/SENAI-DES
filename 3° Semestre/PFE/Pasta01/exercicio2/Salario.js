function reajustar(){
    let salario = Number(document.getElementById('salario').value);
    let bonus = 0

    if(salario>2000){
        bonus = salario * 20/100;
    }

    let salarioFinal = salario + bonus;

    resultado.innerHTML = `
    desconto de R$ ${bonus.toFixed(2)} <br>
    preco final R$ ${salarioFinal.toFixed(2)}
    `;
}