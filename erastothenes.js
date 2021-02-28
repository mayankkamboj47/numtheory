function sieve(n){
    let nums = range(2,n);
    let sqrt_n = n^0.5;
    for(let i=0;nums[i]<sqrt_n;i++){
        let current = nums[i];
        nums = removeMultiples(nums,i);
    }
    return nums;
}
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