"use strict"

var n=145,sum=0,rem ,fact,c;
c=n;

while(n > 0) 
{
    rem=n%10;
    fact=1;
    for(var i=rem; i>0; i--)
    {
        fact=fact*i;
    }

    sum = sum + fact;

    n=parseInt(n/10);
}


if(sum === c){
    console.log("given number is a Special number");
}

else {

    console.log("given number is not a Special number");
}