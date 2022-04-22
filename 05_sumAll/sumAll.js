const sumAll = function(num1,num2) {
   if (typeof num1 != "number" || typeof num2 != "number")
   {
       return "ERROR";
   }
    else if (num1 > 0 && num2 > 0) 
    {
       
    
        let sum = 0;
        let biggerNumber = 0;
        let smallerNumber = 0;
        
        if (num1 > num2)
        {
            biggerNumber = num1;
            smallerNumber = num2;
        } 
        else 
        {
            biggerNumber = num2;
            smallerNumber = num1;
        }        
        for (let i = biggerNumber; i>= smallerNumber; i--)
        {
            sum += i;
        }
        return sum;
    }

    else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
