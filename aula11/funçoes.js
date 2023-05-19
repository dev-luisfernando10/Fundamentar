

// Criar um aplicativo de frases motivacionais 
/*console.log('estudar e muito bom')
console.log('paciencia e persistencia')
console.log('revisao e mae do aprendizado')*/

// Function Declaration 
function CriarFrases() {
    console.log('estudar e muito bom')
    console.log('paciencia e persistencia')
    console.log('revisao e mae do aprendizado')
}

//Executar a funçao
//rodar, chamar, invocar 
//execute, run, call, invoke
CriarFrases()

//Function expression
//function anonymous
const sum = function(number1, number2) {
    total = number1 + number2
    return total
}

let number1 = 34
let = number2 = 25

sum(2, 3) //arguments - argumentos 

console.log(`o numero 1 e ${number1}`)
console.log(`o numero 2 e ${number2}`)
console.log(`a soma e ${sum(number1, number2)}`)

// funçao e um liquidificador 

function sukin(fruta1, fruta2) {
    return fruta1 + fruta2 
}

const copo = sukin('banana', 'maça')

console.log(copo)


//function Scope 

let subject  = 'create video'

function criarPensamento() {
    subject = 'study'
    return subject 

}

console.log(criarPensamento(subject))
console.log(subject)

//Function Hoisting  

/*falameunome()

function falameunome() {
    console.log('Luis')

} 
*/

/* arrow function

const falameunome = () => {
    console.log('Luis')
}

falameunome() */


//callback function 
// o Callback nada mais e que uma funcao que se passa como paramentro para outra funçao


/*function falameunome(name) {
    console.log('Antes de executar a funçaoo callback')

    name()

    console.log('depois de executar a callback')

}

falameunome(
    () => {
        console.log('estou em uma callback')

    }
) */


/* Function() constructor

*expressao nova
*criar um novo objeto
this keyword 
*/ 

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + "esta andando"
    }
}

const luis =  new Person("luis") 
const everton = new Person("everton")
console.log(luis.walk())
console.log(everton.walk())



/* Prototype 

    *Prototype-based language 
    *prototype chain
    *__proto__ 
*/


/*Type conversion (typecasting) vs type coersion 

    *ALteraçao de um tipo de dado para outro tipo
*/

console.log(Number('9') + 5)


//Manipulando Strings e Numeros

// Transformar String em Numero e Numero em String 
/*
let string = "123"
console.log(number(string))
let number = 321 
console.log(string(number))
*/

//Manipulando String e Numeros 

//Contar quantos caracteres tem uma palavra e quantos digitos tem um numero
/*
let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log(string(number).length)
*/

//Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula 
/*
let number = 435312456.33452345 
console.log(number.toFixed(2).replace(".",","))
*/

//TRansforme letras minusculas em maisculas. Faça o contrario disso tambem 
/*
let word = "programar e muito bacana!"
console.log(word.toLowerCase().toUpperCase())
*/
// Separe um texto que contem espaços, em um novo array onde cada texto e uma posiçao do array. Depois dissom transforme o array em um texto e onde eram espaços, coloque _

/*
let frase = "eu quero viver o Amor!"
let Meuarray = frase.split("_")
console.log(Meuarray)
let phraseWithUnderScore = Meuarray.join("")
console.log(phraseWithUnderScore.toLowerCase)*/

//Verificar se o texto contem a palavra Amor 

/*
let frase = "Eu Quero viver o Amor!"
console.log(frase.includes("Amor"))
*/

//Criar Array com construtor 
/*
let Meuarray = ['a', 'b', 'c']
console.log(Meuarray )
*/


//Contar elementos de um Array 
console.log([
    "a", "b", "c".length])


    // Transfomar uma cadeia de caracteres em elementos de um Array 

    let word = "manipulaçao"
console.log(Array.from(word))





//Manipulando Arrays 

let techs = ["html", "css", "js"]

//adicionar um item no fim 
console.log(techs.push("nodejs"))
//Adicionar no começo
techs.unshift("sql")
//remover do fim 
//techs.pop()
//remover do cmc
techs.shift() 
//pegar somente algum elementos do array
//console.log(techs,slice(1, 3)) 
//remover 1 ou mais itens em qualquer posiçao do array 
//techs.splice(1, 2)
//encontrar a posiçao de um elemento do array
let index = techs.indexOf('css')
techs.splice(index, 1)



console.log(techs)