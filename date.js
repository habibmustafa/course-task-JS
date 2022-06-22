let date = prompt('Tarix daxil edin (YYYY.MM.DD)');
date = date.split('.', 3); // 3 hissəyə bölmək

let year = date[0];
let month = date[1];
let day = date[2];
let error = 'Yanlış dəyər daxil edilib'; // ümumi error mesajı

month = Number(month); // case üçün number tipinə çevirmə

if ((year > 0) && (year < 9999)) { // ümümi ili 9999-a qədər daxil etmək mümkün olsun

    switch(month) { // aylar və günlər
        case 1  : day <= 31 ? console.log(`${day} yanvar ${year}-ci il`)   : console.log(error); break;
        case 2  : day <= 28 ? console.log(`${day} fevral ${year}-ci il`)   : console.log(error); break;
        case 3  : day <= 31 ? console.log(`${day} mart ${year}-ci il`)     : console.log(error); break;
        case 4  : day <= 30 ? console.log(`${day} aprel ${year}-ci il`)    : console.log(error); break;
        case 5  : day <= 31 ? console.log(`${day} may ${year}-ci il`)      : console.log(error); break;
        case 6  : day <= 30 ? console.log(`${day} iyun ${year}-ci il`)     : console.log(error); break;
        case 7  : day <= 31 ? console.log(`${day} iyul ${year}-ci il`)     : console.log(error); break;
        case 8  : day <= 31 ? console.log(`${day} avqust ${year}-ci il`)   : console.log(error); break;
        case 9  : day <= 30 ? console.log(`${day} sentyabr ${year}-ci il`) : console.log(error); break;
        case 10 : day <= 31 ? console.log(`${day} oktyabr ${year}-ci il`)  : console.log(error); break;
        case 11 : day <= 30 ? console.log(`${day} noyabr ${year}-ci il`)   : console.log(error); break;
        case 12 : day <= 31 ? console.log(`${day} dekabr ${year}-ci il`)   : console.log(error); break;
        default : console.log(error);
    }

}

else
console.log(error);