/**
 * 选择排序 - 所谓选择，就是一直选择剩余元素中最小的那个
 * 比较次数：约等于 N^2 / 2
 * 交换次数：N次
 */

const Sort = require('./base');

class Selection extends Sort{
  static sort(array) {
    super.sort(array);

    array = this.array;
    const len = array.length;

    for (let i = 0; i < len; i++) {
      let indexofMin = i;


      for (let j = i + 1; j < len; j++) {
        if (this.less(array[j], array[indexofMin])) {
          indexofMin = j;
        }
      }
      this.exch(i, indexofMin);
    }
  }
}

module.exports = Selection;
