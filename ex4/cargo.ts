enum Cargo {
    GERENTE = 'GERENTE',
    FUNCIONARIO = 'FUNCIONARIO', 
    ESTAGIARIO =  'ESTAGIARIO'
}

type Pessoa = {
    nome: string,
    cargo: Cargo
}

function verificarGerencia(pessoa: Pessoa) {
    return pessoa.cargo == Cargo.GERENTE;
}


const pessoa: Pessoa = {
    nome: "Victor Santos",
    cargo: Cargo.GERENTE
}

console.log(verificarGerencia(pessoa));