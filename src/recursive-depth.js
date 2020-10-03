const CustomError = require("../extensions/custom-error");



module.exports = class DepthCalculator {

  calculateDepth(arr, res = 1) {
    if (!Array.isArray(arr)) {
      throw new Error('arr is not an Array!');
    }


    let subArrays = [];

    arr.forEach(item => {
      if (Array.isArray(item)) {
        subArrays.push(item);
      }
    })


    if (subArrays.length) {
      return this.calculateDepth(subArrays.flat(), res + 1)
    } else {
      return res
    }


  }
};