const CustomError = require("../extensions/custom-error");



const chainMaker = {
  res: [],



  getLength() {
    return this.res.length;
  },



  addLink(value) {
    value = String(value);
    this.res.push(`( ${value} )~~`);
    return this
  },



  removeLink(position) {
    if (typeof position == 'number' && position > 0 && position <= this.res.length) {
      this.res.splice(position - 1, 1);
    } else {
      this.res = [];
      throw new Error();
    }
    return this
  },




  reverseChain() {
    this.res.reverse()
    return this;
  },



  finishChain() {
    const lastElement = this.res.pop().split(``);
    lastElement.splice(-2, 2)
    this.res.push(lastElement.join(``));

    const result = this.res.join(``);
    this.res = []
    return result;
  },

};




module.exports = chainMaker;
