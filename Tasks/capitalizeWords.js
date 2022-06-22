// Burada sizin kodunuz olacaq

function capitalizeWords(text) {

    return text.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });



}




// 'Hello My Name Is Harry' qaytaracaq
console.log(capitalizeWords('Hello my name is Harry'));