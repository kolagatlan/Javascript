"use strict"


var sticks=1;
function matchHouses(Houses)
{
    for(var i=0;i<Houses; i++)
    {
        sticks=sticks+5;
    }
    return(sticks);
}
const houses = window.prompt("Enter the no of Houses: ");
                  
var matchSticks=matchHouses(houses);
document.write(`Number of houses: ${houses}`);
document.write(`\n Number of matchsticks: ${matchSticks}`);