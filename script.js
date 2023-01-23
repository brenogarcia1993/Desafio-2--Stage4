


let alunos = [
    {
        nome: 'Breno',
        nota1: 8,
        nota2: 8,
        
    },
    {
        nome: 'Flávia',
        nota1: 7,
        nota2: 3,
        
        
    },
    {
        nome: 'Cármen',
        nota1: 6,
        nota2: 4,
        
    },
    {
        nome: 'César',
        nota1: 10,
        nota2: 4,
        
    }
]

function mediaCalc(n1, n2) {
    return (n1 + n2) / 2
}

for (let aluno of alunos) {
    let nome = aluno.nome
    let nota1 = aluno.nota1
    let nota2 = aluno.nota2

    let mediaNota = mediaCalc(nota1, nota2)

    if(mediaNota >= 7) {
        alert(`O aluno ${nome} está aprovado e sua média foi ${mediaNota}. Aprovado!`)
    } else {
        alert(`O aluno ${nome} não atingiu a média e está reprovado. A média foi ${mediaNota}. Insista, persista e não desista.`)
    }
}







