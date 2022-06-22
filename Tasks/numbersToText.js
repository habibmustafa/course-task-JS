


function numberToText() {
    
    let num = prompt('1-99 arası ədəd daxil edin');

    num = num.split('', 2);
    let n1 = parseInt(num[0]);
    let n2 = parseInt(num[1]);

    if(num < 10) { // birrəqəmli ədədlər üçün
        n2 = '';
        switch (n1) {
            case 1: n1 = 'bir';    break;
            case 2: n1 = 'iki';    break;
            case 3: n1 = 'üç';     break;
            case 4: n1 = 'dörd';   break;
            case 5: n1 = 'beş';    break;
            case 6: n1 = 'altı';   break;
            case 7: n1 = 'yeddi';  break;
            case 8: n1 = 'səkkiz'; break;
            case 9: n1 = 'doqquz'; break;
        }

        console.log(n1);
    }

    else { // ikirəqəmli ədədlər üçün
        switch (n1) {
            case 1: n1 = 'on';     break;
            case 2: n1 = 'iyirmi'; break;
            case 3: n1 = 'otuz';   break;
            case 4: n1 = 'qırx';   break;
            case 5: n1 = 'əlli';   break;
            case 6: n1 = 'altmış'; break;
            case 7: n1 = 'yetmiş'; break;
            case 8: n1 = 'səksən'; break;
            case 9: n1 = 'doxsan'; break;
        }
        
        switch (n2) {
            case 1: n2 = ' bir';    break;
            case 2: n2 = ' iki';    break;
            case 3: n2 = ' üç';     break;
            case 4: n2 = ' dörd';   break;
            case 5: n2 = ' beş';    break;
            case 6: n2 = ' altı';   break;
            case 7: n2 = ' yeddi';  break;
            case 8: n2 = ' səkkiz'; break;
            case 9: n2 = ' doqquz'; break;
            default: n2 = '';
        }

        console.log(n1 + n2);
    }

}

numberToText();