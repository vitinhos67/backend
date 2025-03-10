
enum Nivel {
    BASICO = "BASICO",
    INTERMEDIARIO = "INTERMEDIARIO",
    AVANCADO = "AVANCADO"
}

type Curso = {
    nome: string;
    duracaoHoras: number;
    nivel: Nivel;
}

type CursoComDesconto = Curso & {
    desconto: number; 
}

function calcularPrecoCurso(curso: CursoComDesconto): number {
    let precoBase = curso.duracaoHoras * 50;
    let desconto = precoBase * (curso.desconto / 100);

    switch (curso.nivel) {
        case Nivel.BASICO:
            return precoBase - desconto;
        case Nivel.INTERMEDIARIO:
            return (precoBase * 1.1) - desconto;
        default:
            return precoBase - desconto;
    }
}

const curso: CursoComDesconto = {
    nome: "Curso de TypeScript",
    duracaoHoras: 40,
    nivel: Nivel.INTERMEDIARIO,
    desconto: 15
};

console.log(`Preço do curso: R$ ${calcularPrecoCurso(curso).toFixed(2)}`);
