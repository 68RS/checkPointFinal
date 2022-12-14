//const dados = []
const aluno = {
    nome: "",
    Faltas: 0, 
    notas: [8, 9, 9, 7, 10], 
    

}

function Aluno (nome, faltas) {
    this.nome = nome;
    this.faltas = faltas;
}

const aluno1 = new Aluno('Alex', 2);
const aluno2 = new Aluno('Giselle', 0);
const aluno3 = new Aluno('Aline', 1);

let listaAlunos = [
    aluno1,
    aluno2,
    aluno3
];

//module.exports = {Aluno, listaAlunos};
console.log(listaAlunos);