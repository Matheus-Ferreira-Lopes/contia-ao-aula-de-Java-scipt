// TIPOS DE DADOS 

// No JavaScript, tudo o que armazenamos em variáveis tem um tipo. Esses tipos definem o que podemos fazer com os valores. 


// ### Principais tipos de dados:


// - **String** (textos)
// - **Number** (números)
// - **Boolean** (verdadeiro ou falso)
// - **Object** (objetos, que agrupam informações)
// - **Array** (listas de valores)
// - **Null** (valor vazio)
// - **Undefined** (quando algo não é devinido)

// String
// Sempre é escrita entre aspas ("" ou '')
let nome = ("Matheus")
let mensagem = 'Olá mundo'

console.log(nome);
console.log(mensagem);

// o 'typeof' server para **descobrir o tipo de um valor ou variavel**
console.log(typeof nome);

let saudacao = "Olá" + nome + "!";
console.log(saudacao);

// crie uma variavel chamada cidade e armazene o nome de uma cidade.
// Depois, exiba ao console: "Eu moro em [cidade]."

let cidade = "Guarulhos";
console.log ("Eu sou o Matheus e moro em " + cidade + ".");
//temple String
//shift + tecla do lado do "P" --> '' <--
// console.log ('Eu sou o Matheus e moro em ${cidade}. ')

// - **Number** (números)
//No Javascript, números podem ser inteiros ou decimais.
let idade = 17;
let altura = 1.81;

console.log(idade);
console.log(altura);
console.log(typeof altura);

let soma = 10 + 10;
console.log(soma);

// - Crie uma variável chamada 'anoAtual' e outra chamada 'anoNascimentos'.
// - Calcule e exiba a idade no console.

let anoAtual = 2026;
let anoNascimento = 2008;
let idade2 = anoAtual - anoNascimento;

console.log("Sua idade é: " + idade + " anos. ");
console.log(`Sua idade é:  ${idade}  anos.`);


// - **Boolean** (verdadeiro ou falso)
// Um Boolean pode ter apenas dois valores: true (verdadeiro) ou false (falso).
let maiorDeIdade = true;
let menorDeIdade = false;

console.log(maiorDeIdade);
console.log(menorDeIdade);

// Muito utilizado para fazer comparações.
let idade3 = 20;
let podeDirigir = idade3 >= 18;
console.log(podeDirigir)


//##############################################################################
//Camel Case ---- Mais famosa
// Primeira palavra minúscula
// Palavra seguintes começam com maiúscula

//PascalCase
//Todas as palavras começam com a letra maiúscula
// Usada para Classes, contrutores e componentes
// class UsuarioSistema {
//     constructor(nome,idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }



//Snake Case
// Palavras separadas por underscore _
// Tudo minúsculo
// miiiiito comum no Pyton, banco de dados e APIS
let nome_completo_casado


// Kebab-case
// Palavras separadas por hifen _
// !!!!!! NÃO FUNCIONA COMO NOME DE VARIAVEL EM JAVASCRIPT
// <divclass = "menu-principal"></div>


//##############################################################


//PascalCase
// Todas as palavras começam com a letra maiúscula
// usada para classes, contrutores e componentes
// class UsuarioSistema {
//     constructor(nome,idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// objeto
// Um  obejeto agrupa várias informações dentro de uma mesma variável,usando chave e valor

let pessoa = {
    nome: "Matheus",
    idade: 17,
    cidade: "Guarulhos"
};
console.log(pessoa.nome);
console.log(pessoa.idade);

// - Crie um objeto chamado `carro` com as propiedades ´marca´, `modelo` e ´ano´ .
// - Exiba cada propriedades no console.
let carro = {
    marca: "Impala",
    modelo: 67,
    ano: 1967

}

console.log("Marca do Carro", carro.marca);





