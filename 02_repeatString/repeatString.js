const repeatString = function(string,iterations) {
    if (iterations === 0) return "";
    if (iterations < 0) return "ERROR";
    let newString = string;
for (let i = 0; i < iterations-1; i++)
    {
    newString += string;
    }
return newString;
};

// Do not edit below this line
module.exports = repeatString;
