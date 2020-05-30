/**
 * 希尔排序 -
 * 比较次数：~ N ^ (3/2)
 * 交换次数：
 */

const Sort = require('./base');

class Shell extends Sort{
  static sort(array) {
    super.sort(array);
    array = this.array;

    const len = array.length;

    let h = 1;
    // 某一递增序列
    while (h < len / 3) {
      h = h * 3 + 1;
    }

    while (h >= 1) {
      for (var i = h; i < len; i++) {
        // 暂时要排序的元素
        let temp = array[i];

        for (var j = i; j >= h && this.less(temp, array[j - h]); j -= h) {
          // this.exch(j, j - h);
          array[j] = array[j - h];
        }
        array[j] = temp;
      }

      h = Math.floor(h / 3);
    }
  }
}

module.exports = Shell;
