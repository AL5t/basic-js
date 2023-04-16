const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrMid = [];
  let arrSort = [];

  let idx = arr.indexOf(-1);
  while (idx != -1) {
    arrMid.push(idx);
    idx = arr.indexOf(-1, idx + 1);
  }

  arr.forEach(function (item) {
    if (item !== -1) {
      arrSort.push(item);
    }
  });

  arrSort.sort((a, b) => a - b);

  arrMid.forEach(item => arrSort.splice(item, 0, -1));

  return arrSort;
}

module.exports = {
  sortByHeight
};
