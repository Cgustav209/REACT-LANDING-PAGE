const equipe = [
    {id: 1, nome: 'João', cargo: 'Desenvolvedor Front-end', descricao: 'Especialista em React e Angular, com 5 anos de experiência.'},
    {id: 2, nome: 'Maria', cargo: 'Designer', descricao: 'Especialista em UI/UX, com 3 anos de experiência.'},
    {id: 3, nome: 'Pedro', cargo: 'Desenvolvedor Back-end', descricao: 'Especialista em Node.js e Python, com 4 anos de experiência.'}
];
// ao inves do forEach, o map retorna um novo array, mas aqui estamos usando ele apenas para iterar e imprimir as informações dos membros da equipe
equipe.map(membro => {
    console.log(` ${membro.nome} - ${membro.cargo}: ${membro.descricao}`);

})