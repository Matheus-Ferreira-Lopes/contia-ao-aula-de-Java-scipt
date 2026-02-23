// Um array é uma lista que pode armazenar vários valores

let frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas[2]);
console.table(frutas);


//adiciona ao final da array
frutas.push("Morango");
console.log(frutas);
console.table(frutas)

//remove da posição indicada
frutas.pop(0);
console.table(frutas);


//remover a posição indicada (splice)
frutas.splice(1);
console.table(frutas);


// Crie um arry chamado animais e adicione tres animais. 

let animais = ["Macaco", "Tucano", "Lontra"];

console.log(animais[3]);
console.table(animais);

animais.push("Gorila", "Jacare", "Panda");
console.log(animais);
console.table(animais)



console.log("1. Array cores (3 cores) e mostra a segunda");
const cores = ["Vermelho", "Verde", "Azul"];
console.log("A segunda cor é:", cores[1]);
console.table(cores);



console.log("2. Array numeros (5 numeros) e mostra 1 e ultimo");
const numeros = [10, 25, 30, 45, 50];
const primeiro = numeros[0];
const ultimo = numeros[numeros.length - 1];

console.log("Primeiro: " + primeiro + ", Ultimo: " + ultimo);
console.table({ Primeiro: primeiro, Ultimo: ultimo });



console.log("3. Array frutas (2 frutas) e adiciona uma terceira");
const frutas2 = ["Maçã", "Banana"];
frutas.push("Uva");
console.table(frutas2);


console.log("4. Array nomes (4 nomes) e remove o último ");
const nomes = ["Matheus", "Eduardo", "Lucas", "Pietro"];
nomes.pop();
console.table(nomes);


console.log(" 5. Array times e mostra quantos itens possui");
const times = ["Flamengo", "Corinthians", "São Paulo", "Palmeiras"];
const quantidade = times.length;
console.log("Quantidade de times:", quantidade);
console.table({ "Quantidade de Itens": quantidade });


console.log("6. Array animais e percorre mostrando todos ");
const animais2 = ["Cachorro", "Gato", "Elefante", "Leão"];

console.table(animais2);


console.log(" 7. Array carros e altera o segundo item ");
const carros = ["Ford", "Chevrolet", "Toyota", "Honda"];
carros[1] = "Ferrari";
console.table(carros);


console.log("8. Array linguagens e verifica se contem JavaScript");
const linguagens = ["Python", "Java", "C++", "Ruby"];
const verificaJS = linguagens.includes("JavaScript");
console.table({ "Contem JavaScript?": verificaJS });



console.log("9. Array valores e mostra a soma de todos");
const valores = [5, 10, 15, 20, 25];
const soma = valores.reduce((acc, atual) => acc + atual, 0);
console.log("A soma é:", soma);

console.table({ "Soma Total": soma });



console.log("10. Array vazio tarefas, adicione três e exiba numeradas");
const tarefas = [];
console.table(tarefas)


tarefas.push("Estudar ");
tarefas.push("Fazer exercício");
tarefas.push("Ler um livro");

// Mapeando para um objeto com ID para usar no console.table
const tarefasFormatadas = tarefas.map((t, i) => ({ id: i + 1, tarefa: t }));
console.table(tarefasFormatadas);






