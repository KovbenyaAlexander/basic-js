const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, obj) {
  let {
    repeatTimes = 1,
    separator = `+`,
    additionSeparator = `|`,
    addition = ``,
    additionRepeatTimes = 1,
  } = obj

  const additionTextArr = [];
  const res = [];
  str = String(str);
  addition = String(addition);

  for (let i = 0; i < additionRepeatTimes; i++) {
    additionTextArr.push(addition);
    additionTextArr.push(additionSeparator);
  }

  additionTextArr.pop();
  const additionTextStr = additionTextArr.join(``);

  for (let i = 0; i < repeatTimes; i++) {
    res.push(str);
    res.push(additionTextStr);
    res.push(separator);
  }

  res.pop();
  return res.join(``)
}