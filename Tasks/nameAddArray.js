let queue = new Array(),
i = 0, value = '';

while(true) {

    value = prompt('Ad, Soyad daxil edin').split(' ');

    if(value.length == 2) {
        value = value.join(' ');
        queue.push(value);
    }

    if(value == '') {
        console.log(queue[0]);
        queue.shift();
        console.log(queue); // Bilinsin deyə konsola çıxartdım
    }

    if(value == '=') {
        console.log(queue);
        break;
    }
}