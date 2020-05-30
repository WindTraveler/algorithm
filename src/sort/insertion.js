/**
 * 插入排序 -
 * 比较次数：N^2 / 4
 * 交换次数：N^2 / 4
 */

const Sort = require('./base');

class Insertion extends Sort{
  static sort(array) {
    super.sort(array);
    array = this.array;

    const len = array.length;

    for (let i = 1; i < len; i++) {
      const temp = array[i];

      for (var j = i; j > 0 && this.less(temp, array[j - 1]); j--) {
        // this.exch(j, j- 1);

        // 方式二：把较大的元素向右移动一位，要比 exch 更快
        array[j] = array[j - 1];
      }
      array[j] = temp;
    }
  }
}

module.exports = Insertion;
