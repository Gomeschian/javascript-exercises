const removeFromArray = function(array, ...toRemove) {
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++)
    {
        if (toRemove.includes(array[i]))
        {
            array.splice(i,1);
            i--;
        }
    }
    return array;
    
  

  
  
  
    /*  for (let i = 0; i < arrayLength; i++)
    {
        if (toRemove.includes(array[i]))
        {
            array.splice(i,1);
        }
    }
    return array;
    */
};

// Do not edit below this line
module.exports = removeFromArray;
