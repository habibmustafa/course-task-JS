
let num = prompt('ədəd daxil edin');

let total = 0;

if ((num > 0) && (num < 1000))
    for (let i = 0; i < 1000; i++) {
        if((i % num == 0) && (i > 99)) total += i;
    }

else 
console.log('1-999 intervalında ədəd daxil edin');

console.log(total);