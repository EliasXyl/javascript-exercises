const removeFromArray = function(arr, ...itemsToRemove) {
    const newArray = [];
    arr.forEach(element => {
        if (!itemsToRemove.includes(element)) {
            newArray.push(element)
        }
        
    });
    return newArray;
};
  

// Do not edit below this line
module.exports = removeFromArray;
