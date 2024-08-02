const reverseString = function(initialString) {
    let reversedString = "";
    for (let i = initialString.length - 1; i >= 0; i--) {
        reversedString += initialString.charAt(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
