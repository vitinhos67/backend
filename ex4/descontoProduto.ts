
enum Categoria {
    PERECIVEL = "PERECIVEL",
    NAO_PERECIVEL = "NAO_PERECIVEL"
}

type Produto = {
    nome: string;
    preco: number;
    categoria: Categoria;
}

function verificarDesconto(produto: Produto): number {
    if (produto.categoria === Categoria.PERECIVEL) {
        return 10;
    }
    return 0;
}

const produto: Produto = {
    nome: "Maçã",
    preco: 5.0,
    categoria: Categoria.PERECIVEL
};

console.log(`Desconto para ${produto.nome}: ${verificarDesconto(produto)}%`);
