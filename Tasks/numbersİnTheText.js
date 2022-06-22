let text = prompt('Mətn daxil edin');

let meter = 0;

for(i = 0; i < text.length; i++) {
    
    ((text[i] = Number(text[i])) || (text[i] == 0)) ? ++meter : meter;
}

meter == 0 ? console.log('Sətrdə rəqəmlər yoxdur') : console.log(`Sətrdə ${meter} rəqəm var`);