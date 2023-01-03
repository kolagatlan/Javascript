"use strict"
let n=1;
let string="";
for(let i=1; n<=10; i++){

   for(let j=1; j<=i; j++){

        string += n + " ";
       // string +="";
        n++;

    }
    string += "\n";
}

console.log(string);
