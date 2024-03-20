function media() {
    let nome = prompt('Qual é o nome do aluno?');

    let nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`));

    let res = document.getElementsByTagName('p')[0];

    let nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`));

    let media = (nota1 + nota2) / 2;

    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`;

    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>.</p>`;

    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`


    if (media >= 6) {
        res.innerHTML += `A mensaggem que temos é: <mark>Parabéns! Aprovado.</mark>`
    } else if (media >= 0 && media < 6) {
        res.innerHTML += `A mensaggem que temos é: <mark>Reprovado! Continue estudando.</mark>`
    } 
    
}