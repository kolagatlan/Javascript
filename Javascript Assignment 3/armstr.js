"use strict"

var n=153,sum=0,rem ,c;
c=n;

while(n > 0){
    rem=n%10;
    sum=sum+rem*rem*rem;
    n=parseInt(n/10);
}
//console.log("sum="+ sum);
if(sum === c){
    console.log("given number is armstrong");
}

else {

    console.log("given number is not an armstrong");
}


   