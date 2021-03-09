import {powmod} from './fastmod.js';
/**
 * sieve(n) returns primes upto n using Eratosthenes' sieving method
 * probPrime(n) returns a probability of n being prime based on the converse of Fermat's little theorem
 */
function sieve(n){
    let nums = range(2,n);
    let sqrt_n = n^0.5;
    for(let i=0;nums[i]<sqrt_n;i++){
        let current = nums[i];
        nums = removeMultiples(nums,i);
    }
    return nums;
}
function probPrime(n){
    return [2,3,5,7,11].every(x=>powmod(x,n-1,n)==1);
}

/**Helper functions */
function range(a,b){
    let nums = [];
    while(a<=b){
        nums.push(a++);
    }
    return nums;
}
function removeMultiples(array, i){
    let factor = array[i];
    let lesser = array.slice(0,i+1);
    let greater = array.slice(i+1).filter(a=>a%factor);
    return lesser.concat(greater);
}