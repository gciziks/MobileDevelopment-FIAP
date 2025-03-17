// Ex.01
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}


const meuCarro: Carro = {
    marca: "Wolkswagen",
    modelo: "Polo",
    ano: 2021,
    motor: "2.0",
};

console.log(meuCarro);


// Ex.02

interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => {
    return a * b;
};

console.log(multiplicar(6, 7));
console.log(multiplicar(8, 9));


// Ex.03

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

const numeros = [5, 7, 9, 12, 55];
const palavras = ['d', 't', 'y', 'z'];
const numerosInvertidos = inverterArray(numeros);
const palavrasInvertidas = inverterArray(palavras);
console.log(numerosInvertidos);
console.log(palavrasInvertidas);

// Ex.04

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

interface Usuario {
    nome: string;
    email: string;
}

class RepositorioUsuarios implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];

    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
    }

    obterTodos(): Usuario[] {
        return this.usuarios;
    }
}

// Ex.05

type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === 'string') {
        console.log(`Servidor voltou STRING`);
    } else if (typeof resposta === 'boolean') {
        console.log(`Servidor voltou BOOLEAN`);
    }
    else{
        console.log(`Tipo inválido`);
    }
}

processarResposta("Teste String");
processarResposta(true);

// Ex.06

type Estudante  = {
    nome: string;
    curso: string;
};
type Trabalhador  = {
    empresa : string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante  & Trabalhador ;
const estudante: EstudanteTrabalhador = {
    nome: "Rogério",
    curso: "Engenharia de Software",
    empresa: "FIAP",
    cargo: "Analista"
};



