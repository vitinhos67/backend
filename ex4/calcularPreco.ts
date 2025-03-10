
interface CursoComDesconto {
    duracaoHoras: number;
    desconto?: number;
    nivel: 'BASICO' | 'INTERMEDIARIO' | 'AVANCADO';
}

export function calcularPreco(curso: CursoComDesconto): number {
    let preco = curso.duracaoHoras * 10;

    if (curso.desconto) {
        preco -= (preco * (curso.desconto / 100));
    }

    switch (curso.nivel) {
        case 'BASICO':
            break;
        case 'INTERMEDIARIO':
            preco += (preco * 0.05);
        case 'AVANCADO':
            preco += (preco * 0.10);
            break;
    }

    return preco;
}
