/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    console.log(x)
    let numberString = String(x), isNegative=false;
    if(numberString[0] === "-") {
        numberString = String(Math.abs(x));
        isNegative=true;
    }
    let l = numberString.length,
            result = x,
            i = 0;
    for(i=0; i<l; i++){
        console.log(i, l, numberString[i]);
        result[i] = numberString[l-i-1];
    }
    console.log("res",result)
};

console.log("certo");
reverse(-12345)