const reverseString = function(string) {
const oldString = string.split("");
const newString = [];
for (let i = oldString.length-1; i >= 0; i--)
    {
    newString.push(oldString[i]);
    }
return newString.join("");
};

// Do not edit below this line
module.exports = reverseString;
