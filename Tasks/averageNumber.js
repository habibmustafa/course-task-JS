let all = prompt('3 rəqəmli ədəd daxil edin');

all = all.split(',');

let a = all[0];
let b = all[1];
let c = all[2];

// ədədlərin ikirəqəmli olmasının yoxlanması
if ((a >= 10) && (a <= 99) && (b >= 10) && (b <= 99) &&(c >= 10) && (c <= 99)) {

    // ədədlərin bərabərliyinin yoxlanması
    if((a == b) || (b==c) || (a==c)) {
        
        if ((a == b) && (b == c))
            console.log('Üç daxil edilmiş ədəd eynidir');
        
        else
            console.log('İki daxil edilmiş ədəd eynidir');
    }

    else {
        
        // Orta ədədin tapılması
        if((a > b) && (a < c))  // b<a<c
            console.log('Orta ədəd - ' + a + ' -dir');

        else if ((b > a) && (c < a))  // c<a<b
            console.log('Orta ədəd - ' + a + ' -dir');

        else if ((c > b) && (a < b))  // a<b<c
            console.log('Orta ədəd - ' + b + ' -dir');

        else if ((b > a) && (c < b))  // c<b<a
            console.log('Orta ədəd - ' + b + ' -dir');

        else if ((c > a) && (c < b))  // a<c<b
            console.log('Orta ədəd - ' + c + ' -dir');

        else  // b<c<a
            console.log('Orta ədəd - ' + c + ' -dir');
        
    }
}

else
    console.log('Yanlış dəyər daxil edilib');
