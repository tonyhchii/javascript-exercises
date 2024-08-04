const palindromes = function (palindrome) {
    let forward = cleanedString(palindrome).join('');
    let backward = cleanedString(palindrome).reverse().join('');
    console.log(forward, backward);
    return forward === backward;
};
const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
function cleanedString(freshString) {
    let cleanString = freshString
                        .toLowerCase()
                        .split('')
                        .filter((char) => alphabet.includes(char))
    return cleanString;
}
// Do not edit below this line
module.exports = palindromes;
