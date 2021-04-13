var randomLetter;
function generateRandomLetter() {
   const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];;
   
   return alphabet[Math.floor(Math.random() * alphabet.length-1)];
}
for(let i = 25; i < 0; i--){
  alphabet.push[i];
}

document.addEventListener('keyup', function (event) {
   console.log(generateRandomLetter());
});   
const body = document.querySelector('body');
const ol = document.createElement('ol');
ol.appendChild(body); 