"use strict";

const exemple = 'eu vou para a escolaa';

// Criando função para todas as variaveis que for do tipo String.
String.prototype.countVowel = function () {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // Para usar esta função no prototype, coloca o nome da variavel.função. o this é igual ao valor da mesma. 
  // Agora eu pego o valor ou seja "eu vou para a escolaa" e espalho ele dentro da outra variavel
  const vowelStr = [...this];
  
  //Number e o + são apenas para converter para String
  let count = Number(+0);
  
  //Percorrenndo o array usando o forEach
  vowelStr.forEach((letter) => {
    //Ternario, se a letter da posição exister dentro do array então retorna o count++ se não false. o + a esquerda apenas para converter para num
    vowels.includes(letter) ? +count++ : false; 
  });

  //Retorna valor do count
  return +count;
}

// Chamando a variavel que esta no prototype
console.log(`A frase "${exemple}" tem ${exemple.countVowel()} vogais`);

// No prototype tem as função dos tipos. Exemplo no tipo String temos diversas função la, tipo a .length, e etc. a função length.
