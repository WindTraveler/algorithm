/**
 * 快速排序
 */

const Sort = require('./base');

class Quick extends Sort{
  static sort(array) {
    super.sort(array);
    array = this.array;
    const len = array.length;

    this.sortCore(array, 0, len - 1);
  }

  static sortCore(a, lo, hi) {
    if (lo >= hi) {
      return;
    }

    // 同归并相反 - 先处理后递归
    const k = this.partition(a, lo, hi);

    this.sortCore(a, lo, k - 1);
    this.sortCore(a, k + 1, hi);
  }

  static partition(a, lo, hi) {
    const v = a[lo];
    let i = lo;
    let j = hi + 1;

    while (true) {
      while (this.less(a[++i], v)) {
        if (i === hi) {
          break;
        }
      }
      while (this.less(v, a[--j])) {
        if (j === lo) {
          break;
        }
      }

      if (i >= j) {
        break;
      }

      this.exch(i, j);
    }

    // 此处必须与 j 交换，而不是 i
    this.exch(j, lo);
    return j;
  }
}

module.exports = Quick;
