let sentence = prompt('Cümlə daxil edin');
sentence = sentence.split(' ');

for(let i = 0; i < sentence.length; ++i) {
    if(sentence[i].length >= 5) {
        sentence[i] = sentence[i].split('').reverse().join('');
    }
}

sentence = sentence.join(' ');
console.log(sentence);