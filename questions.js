
function question1(ans) {
    console.log('12*6 cavabı neçədir?\n1) 84\n1) 92\n1) 72\n1) 56');

    console.log(`Sizin cavabınız ${ans}`);
    switch(ans) {
        case 1: return false;
        case 2: return false;
        case 3: return true;
        case 4: return false;_
        default: return 'bele variant yoxdur';
    }
}

let qst1 = question1(3); // true
console.log(qst1);

// sual 2
function question2(ans) {
    console.log('Aşağıdakılardan hansı sadə ədəddir?\n1) 23\n1) 27\n1) 18\n1) 51');

    console.log(`Sizin cavabınız ${ans}`);
    switch(ans) {
        case 1: return true;
        case 2: return false;
        case 3: return false;
        case 4: return false;
        default: return 'bele variant yoxdur';
    }
}

let qst2 = question2(1); // true
console.log(qst2);

// sual 3
function question3(ans) {
    console.log('Neçə ikirəqəmli ədəd var?\n1) 99\n1) 100\n1) 89\n1) 90');

    console.log(`Sizin cavabınız ${ans}`);
    switch(ans) {
        case 1: return false;
        case 2: return false;
        case 3: return false;
        case 4: return true;
        default: return 'bele variant yoxdur';
    }
}

let qst3 = question3(4); // true
console.log(qst3);

// Siz qalib gəldiniz
(qst1 == true) && (qst2 == true) && (qst3 == true) ?
console.log('Siz qalib gəldiniz!') : console.log('Siz məğlub oldunuz!');
