
function isValidNumber(tel) {
    tel = String(tel);

    let verify = ((tel.length == 13) && 
    (tel[0] == '+') && (tel[1] == '7')) 
    ? true :  false;
    
    return verify;
    
}

// true
console.log(isValidNumber('+712345678910'));