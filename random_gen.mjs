import {
    gcd
} from './kuttak.mjs';

export function random_sequence(upto, seed, amount) {
    let multiplier,sum;
    for (let i = 2; i < upto; i++) {
        if (gcd(i, upto)[0] === 1) {
            multiplier = i;
            break;
        }
    }
    for(let j=multiplier+1;j<upto;j++){
        if(gcd(j,upto)[0]===1) {
            sum = j;
            break;
        }
    }
    let randseq = [];
    for (let i = seed, count=0; count < amount; count++,i = (i+1)%upto) {
        randseq.push((i*multiplier + sum)%upto);
    }
    return randseq;
}

/**
 * To do : Use a multiplier and sum that generates pseudorandom numbers till upto (the best case)
 * 
 */