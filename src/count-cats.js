const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let res = 0;
  matrix.forEach(array => {
    array.forEach(item => {
      if (item === `^^`) {
        res++
      }
    })
  });
  return res;
};
