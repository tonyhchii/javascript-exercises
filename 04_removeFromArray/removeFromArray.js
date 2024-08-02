const removeFromArray = function(arr, ...number) {
    for (let i = 0; i < number.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            while(arr[j] === number[i]) {
                arr.splice(j,1);
            }
        }
     }
     console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
