let n = prompt('ədəd daxil edin');

let i = 1, num, meter, ans = 0;
while(i <= n) {

    num = 1;
    meter = 0;
    while(num <= n) {
        !(n % num) ? meter++ : false;
        
        num++;
    }
    meter == 2 ? console.log(n) : false;
    n == 1 ? console.log(1) : false;

    n--;
}