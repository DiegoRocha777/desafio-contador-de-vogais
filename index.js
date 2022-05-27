"use strict";

const exemple = 'eu vou para a escolaa';

String.prototype.countVowel = function () {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelStr = [...this];

  let count = Number(+0);
  vowelStr.forEach((letter) => {
    vowels.includes(letter) ? +count++ : false; 
  });

  return +count;
}

console.log(`A frase "${exemple}" tem ${exemple.countVowel()} vogais`);
