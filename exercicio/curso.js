const {Aluno, listaEstudantes} = require ("./aluno")

let curso = {
    nomeDoCurso: "JavaScript",
    notaAprovacao: 7,
    faltasMaximas: 4,
    listaEstudantes,

    // Façam a funçao para adicionar um novo aluno

    addAluno: function(aluno) {
        let fernanda = new Aluno("Agatha", 0, [4,6,9,7,10])
    },

    // Faça a função aluno aprovado

    aprovado: function(aluno) {

    },

      // Retornem a lista de alunos aprovados

    listaAprovados: function() {

    }
}

// É difíssil, pelo menos pra mim, fazer uma prova de um conteúdo (FUNÇÃO CONSTRUTORA), que não foi ensinado em aula e não consta no PG. Não é indicando um link relacionado 
// que vai fazer diferença pra quem não estudou a matéria. No meu caso praticular, foi prejudicial.