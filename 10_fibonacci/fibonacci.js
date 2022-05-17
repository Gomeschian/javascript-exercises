const fibonacci = function(degree) {
if (degree < 0) {return "OOPS"};
const fSequence = [];
for (let i = 1; i <= degree; i++)
{
    if (i===1 || i===2)
    {
        fSequence.push(1);
    }
    else fSequence.push(fSequence[i-2] + fSequence[i-3]);
}
return fSequence[degree-1];
};

// Do not edit below this line
module.exports = fibonacci;
