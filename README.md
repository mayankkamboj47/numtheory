# numtheory
A repository for my number theory projects

List of programs : 

### primes.js

Erastothenes' sieving algorithm for finding primes upto a number n. 

Also contains a probabilistic primality checker. 

### kuttak.js

Euclid's extended algorithm for finding the bezout's coefficients of a number

## random_gen.js

Pseudorandom number generator based on modular arithmetic. 

`function random_sequence(upto, seed, amount)`

 Generates `<amount>` number of random values, not exceeding upto (Note : Values may actually start repeating much earlier as of now). To remedy this, use 2^32-1 as a multiplier. Using the same value for seed guarantees the same random sequence, if the values of upto and amount are same. 

## fastmod.js

Functions for fast modular arithmetic

`function powmod(base,pow,mod)`

Calculates base^pow % mod in about `log pow` time. Can also be used for values of pow for which base^pow exceeds the storage of the variable. 

## bignum.js

Functions for doing operations on arbitrarily large numbers (bignums).

`convert(num)`

Takes a number in form of a string, and converts it into the bignum data type. 

`add(<bignum> a,<bignum> b)`
adds 2 bignums and returns their sum as a bignum

`multiply(<bignum> a, <bignum> b)`
multiplies 2 bignums together

### The format 

The way we store bignums is just as an array of base-10^15 numbers. The array can grow arbitrarily long. 
The last element of the array is the one with the lowest place value. 
