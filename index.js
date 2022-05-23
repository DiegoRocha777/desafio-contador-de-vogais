const exemple = 'eu vou para a escola'
let vowel = ['a', 'e', 'i', 'o', 'u']

let howManyVowels = 0

function vowelCounter (){
  for (let i = 0; i < exemple.length; i++){
      for (let v = 0; v < vowel.length; v++){
        if (exemple[i]===vowel[v]) {
            howManyVowels ++
        }
      }
  }
  return howManyVowels
}

console.log(`A frase "${exemple}" tem ${vowelCounter()} vogais`);