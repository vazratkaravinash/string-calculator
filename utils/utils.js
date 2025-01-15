/**
 * This will return the array of delimiters
 * @param {String} numbers 
 * @returns Array of Numbers
 */
const getAllDelimiters = (numbers)  => {
    if (numbers.startsWith('//')) {
    const delimiterEnd = numbers.indexOf('\n');
    let delimiters =  numbers.substring(2, delimiterEnd)
    numbers = numbers.substring(delimiterEnd + 1);
    return {numbers, delimiters};
    }
    return {numbers, delimiters:[]};
}

/**
 * Function will replace all delimiters to comma
 * @param {String} numbers 
 * @param {Array} delimiters 
 * @returns Updated numbers string
 */
const replaceDelimitersWithComma = (numbers, delimiters) => {
    delimiters.forEach(delimiter => {
        if (numbers.includes(delimiter)) {
            numbers = numbers.split(delimiter).join(',');
        }
    });
    console.log(numbers)
    return numbers
}

module.exports = {
    getAllDelimiters,
    replaceDelimitersWithComma
}