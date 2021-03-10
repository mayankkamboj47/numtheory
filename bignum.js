function add(a,b){
    a = a.slice(),b=b.slice(); /**create copies so we don't modify the original */
    let max = Math.pow(10,15); 
    let carry = 0;
    let numlen = Math.max(a.length,b.length);
    a = zeroPad(a,numlen),b = zeroPad(b,numlen); /**make a and b the same size */
    let result = new Array(numlen).fill(0);
    let i;
    for(i=numlen-1;i>=0;i--){
        let willcarry = (a[i] >= max - b[i] - carry) ? 1 : 0;
        if(willcarry) a[i]-=lim;
        result[i] = a[i]+b[i]+carry;
        carry = willcarry;
    }
    if(carry) result = [carry].concat(result);
    return result;
}
function convert(str){ /**Start at str[len-1] and finish at str[0].  */
    let bignum = [];
    let currentnum = "";
    for(let i=str.length-1;i>=0;i--){
        if(currentnum.length<15) currentnum = str[i]+currentnum;
        else{
            bignum = [parseInt(currentnum)].concat(bignum);
            currentnum = str[i];
        }
    }
    if(currentnum.length>0) bignum = [parseInt(currentnum)].concat(bignum);
    return bignum;
}

function multiply(a,b){ /**both bignums */
    let sum = [0];
    for(let i=b.length-1;i>=0;i--){
        let v = product(a,b[i]).concat(new Array(b.length-1-i).fill(0));
        sum = add(sum,v);
    }
    return sum;
}
/**Helper functions */

function zeroPad(a,n){
    while(a.length<n) a = [0].concat(a);
    return a;
}
function product(a,b){/**a => any bignum. b: normal integer < 10^15 */
    let sum = [0];
    let pow_two = a; /**Will store a^1 a^2 a^4 a^8 ... */
    while(b>0){
        let curr_digit = b%2;
        if(curr_digit) sum = add(sum,pow_two);
        pow_two = add(pow_two,pow_two);
        b = Math.floor(b/2);
    }
    return sum;
}