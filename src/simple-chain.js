const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || Number.isInteger(position) === false || position <= 0 || position > this.getLength()) {
      this.arr.length = 0;
      throw new Error ('You can\'t remove incorrect link!');
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
