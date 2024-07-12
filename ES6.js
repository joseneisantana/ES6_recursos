
const alunos = [
    { nome: 'Alice', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 7 },
    { nome: 'Diana', nota: 4 },
    { nome: 'Eduardo', nota: 6 }
  ];
  
 
  function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
  }
  const aprovados = filtrarAprovados(alunos);
  console.log(aprovados);
  
