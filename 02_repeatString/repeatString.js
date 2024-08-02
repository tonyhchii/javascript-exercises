const repeatString = function(repeatedString, amount) {
    let newString = "";
    if (amount < 0) {
        return "ERROR"
    }
    for (let i = 0; i < amount; i++) {
        newString += repeatedString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
