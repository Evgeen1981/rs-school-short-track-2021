/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const getCharsCounted = function (inputArray) {
    const outputArray = [];
    outputArray.push([], []);
    const splitedArray = inputArray.split('');
    for (let i = 0; splitedArray.length - 1 >= i; i++) {
      if (outputArray[0].indexOf(splitedArray[i]) === -1) {
        outputArray[0].push(splitedArray[i]);
        outputArray[1].push(splitedArray.filter((v) => v === splitedArray[i])
          .map(() => 1).reduce((acc, v) => acc + v));
      }
    }
    return outputArray;
  };
  const getSum = function (array1, array2) {
    let sum = 0;
    for (let i = 0; array1[0].length - 1 >= i; i++) {
      for (let j = 0; array2[0].length - 1 >= j; j++) {
        if (array1[0][i] === array2[0][j]) { sum += Math.min(array1[1][i], array2[1][j]); }
      }
    }
    return sum;
  };

  return getSum(getCharsCounted(s1), getCharsCounted(s2));
}

module.exports = getCommonCharacterCount;
