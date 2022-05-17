const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(numbers) {
 
  const numSum = numbers.reduce(function(total,nextNumber)
  {
return total + nextNumber;
  },0)
return numSum;
};

const multiply = function(multiplicants) {

  const product = multiplicants.reduce(function(total,nextMultiplier){
    return total * nextMultiplier;
  },1);
  return product;

};

const power = function(base,exponent) {
	return Math.pow(base,exponent);
};

const factorial = function(number) {
const factors = [];
for (let i=number; i > 0; i--)
{
  factors.push(i);
}
return factors.reduce(function(total,factor)
  {
    return total * factor;
  },1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
