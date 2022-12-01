"use strict"

let fact, factorial, i;

fact=5;
factorial=1;
i=fact;
while(i>=1){
    factorial = factorial*i;
    i--;
}

console.log(`factorial of ${fact} is ${factorial}`);