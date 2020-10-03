const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error;
  } else if (arr.length === 0) {
    return [];
  }

  const res = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === `--discard-next`) {
      if (arr[i + 2] === `--discard-prev` || arr[i + 2] === `--double-prev`) {
        i += 2;
      } else {
        i++;
      }
    } else if (arr[i] === `--discard-prev`) {
      res.pop();
    } else if (arr[i] === `--double-next`) {
      if (i === arr.length - 1) {
        continue
      }
      res.push(arr[i + 1]);
    } else if (arr[i] === `--double-prev`) {
      if (i === 0) {
        continue
      }
      res.push(arr[i - 1]);
    } else {
      res.push(arr[i])
    }
  }

  return res

}
