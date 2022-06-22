let n = prompt('Neçənci ədədi çıxarmaq istəyirsiniz?');

let a = 0, b = 1, fib;

n == 1 ? fib = a : false;
n == 2 ? fib = b : false; 

if ((n > 0) && !(n * 10 % 10)) { // yalnız natural ədədlər olması şərti ilə;

    for (i = 3; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    console.log(fib);
}
else console.log('Yanlış dəyər daxil edilib');