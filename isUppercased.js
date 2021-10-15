/**
 * Whether string starts from capital letter A-Z
 * @param {string} str string to check 
 * @returns {boolean} true  if string starts from A...Z
 */
var isUppercased = str => {
    if (typeof str !== 'string') {
        return false;
    }
    if (!str[0]) return false;
    var charCode = str[0].charCodeAt();
    return str[0] && (65 <=  charCode && charCode <= 90);
}

module.exports = isUppercased;