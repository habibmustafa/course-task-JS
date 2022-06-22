
function isLucky(num) {

    
    let startNum = Math.floor(num / 1000); // ilk üç rəqəm
    let endNum = num % 1000; // son üç rəqəm

    let startOne = Math.floor(startNum / 100); // birinci rəqəm
    let startTwo = Math.floor(startNum / 10) % 10; // ikinci rəqəm
    let startThree = startNum % 10; // üçüncü rəqəm

    let startTotal = startOne + startTwo + startThree; // ilk üç rəqəmin cəmi

    let endOne = Math.floor(endNum / 100); // birinci rəqəm
    let endTwo = Math.floor(endNum / 10) % 10; // ikinci rəqəm
    let endThree = endNum % 10; // üçüncü rəqəm

    let endTotal = endOne + endTwo + endThree; // son üç rəqəmin cəmi

    return (startTotal == endTotal) ? true : false; // doğru olub olmamasını yoxlama

}

console.log(isLucky(234801));  // true