/*Primeiros Passos!!! */


console.log('Bem vindos Ao Starter')

//Para Ignorar Codigo no Js eu uso 2 barras(/) 

/* Para fazer um Comentario de bloco 

Comentario Com varias linhas 

Usaremos (* e depois colocaremos um / ) */ 

/*Tipos De Dados!!! */


/*
    Number
        Numeros

33 // Inteiros 
32 // reais - float 
Non // Not a Number 
infinity // Infinito 

 */

console.log(12.5)

/* Nao conseguimos divir um numero por letras! 

Ex:
Irar Aparecer Um erro */

console.log(12.5/ 'aasvsdvrtte')

/* Tambem podemos saber se o Numero e Infinito usando o Comando Infinity*/ 

console.log(12.5 === Infinity)

/*

Vamos Aprender O Tipo de Dado Bulean(Buleano)

Que Existe 2 respostas 

true - Verdadeiro 
False - Falso 
*/

console.log(True)

/*
    Tipo de Dados 

    *Undefined 
        -Indefinido 

    *Null
        -Nulo
        -Objeto que nao possui nada dentro
        -diferente de indefinido 

*/

console.log(null === undefined)


/* 

    *Object
        -Objeto 
        -Propriedades/Atributos
        -Funcionalidades/Metodos 
    
    (Propriedades: "Valor")

*/ 

console.log({
    name:"Luis",
    Idade:"14",
    andar:function() {
        console.log('andar')
    }

})

/* /Array (Vetores)
    -Uma Lista
    -Agrupamento de Dado

    [Luis, 14]
*/

console.log([
    "Leite", 
    "Ovos"




])

/*Variaveis!!! */

// var 

var clima = "quente"
clima = "Frio"

console.log(clima)




// vamos iniciar um bloco 
{ 
    // Aqui dentro e um bloco e posso colo0car qualquer codigo 

}   // aqui fechamos o bloco 


// O Var em js mais "Avançados" ele e deixado de lado mas tambem ele e Global e podera funcionar fora de um escopo de bloco

//O scope do Const e Let sao locais e So funcionam no escopo onde foi criada 


//Praticando e Aprendendo!!!


    // Variaveis e TIpos de Dados 
    //declaraçao ou declaration
    var name



    //assignment or atribuiçao de valores 
    name = "Luis"


//console.log(name)
    //Que tipo de dado foi colocado na variavel 
// console.log(typeof name)


    let age, isHuman 
    
    age = 14 
    isHuman = true 

// console.log(name, age , isHuman)

// Escrita de Texto + Variaveis

//Concatenando Valores 
    console.log('o '+ name +' tem '+ age + ' anos. ')

// Interpolando Valores com template literals or template Strings  

console.log(`O  ${name} ${tem} age anos`)


//Object 

const person = { 
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true 
}

console.log('person.age')
    

//array 

const animals = [
    'Lion',
    'Monkey',
    {
        nome: 'Cat',
        age:3
    }

]

console.log(animals[2])







