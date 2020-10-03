const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {

  if (!Array.isArray(array)) {
    return false;
  };

  let res = [];
  array.forEach(item => {
    if (typeof (item) === `string`) {
      res.push(item.trim()[0].toUpperCase());
      ;
    };
  });


  if (res.length === 0) {
    return false;
  };
  return res.sort().join(``);
};