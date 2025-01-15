const utils = require('./utils/utils')

/**
 * Return Sum of all numbers separated by delimeters
 * @param {String} numbers 
 * @returns Number
 */
const add = (numbers) => {
    if (!numbers) return 0;
    let delimiters = [',', '\n'];
    let responseObj = utils.getAllDelimiters(numbers)
    numbers = responseObj.numbers;
    delimiters = [...delimiters, ...responseObj.delimiters]
    numbers = utils.replaceDelimitersWithComma(numbers, delimiters)
    const numList = numbers.split(',');
    
    let total = 0;
    let negatives = [];
    
    numList.forEach(num => {
        if (num) {
            const n = parseInt(num, 10);
            if (n < 0) {
                negatives.push(n);
            } else {
                total += n;
            }
        }
    });
    
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
    
    return total;
}

module.exports = add;