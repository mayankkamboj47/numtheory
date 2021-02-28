function gcd(a,b){
    let min,max,s,t,i;
    min = Math.min(a,b);
    max = Math.max(a,b);
    s=[1,0],t=[0,1],i=2;
    while(min>0){
        rem = max % min;
        let d = (max-rem)/min;
        max = min;
        min = rem;
        s.push(s[i-2] - d*s[i-1]);
        t.push(t[i-2]- d*t[i-1]); 
        i++;
    }
    return [max,s[i-1],t[i-1]];
}
