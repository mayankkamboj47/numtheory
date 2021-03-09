export function powmod(base,pow,mod){ /**Calculate base^pow % mod */
    //if(isPrime(mod) & base%mod!==0) pow = pow%(mod-1); //Fermat's little theorem
    let ans = 1, p=base;
    for(let i=0;pow>0;i++){
        let curr_digit = pow % 2; 
        pow = parseInt(pow/2);
        ans=(ans*Math.pow(p,curr_digit)) % mod;
        p = (p*p) % mod;
    }
    return ans;
}