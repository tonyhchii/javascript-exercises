const sumAll = function(begin, end) {
    if(!Number.isInteger(begin) || !Number.isInteger(end) || begin < 0 || end < 0){
        return "ERROR"
    }
    let sum = 0;
    if (begin > end) {
        let temp = begin;
        begin = end;
        end = temp;
    }
    for(let i = begin; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
