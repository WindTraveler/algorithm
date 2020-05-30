/**
 * @file 归并排序
 * NlogN
 */

const Sort = require('./base');

class Merge extends Sort {
  //
  static sort(array) {
    super.sort(array);
    array = this.array;
    // XXX 注一步尤为重要
    this.temp = [];
    const len = array.length;

    this.sortCore(0, len - 1);
    // this.sortCore2();
  }

  static sortCore2() {
    const len = this.array.length;

    for (let sz = 1; sz < len; sz = sz + sz) {
      for (let lo = 0; lo < len - sz; lo += sz + sz) {
        this.merge(lo, lo + sz - 1, Math.min(len - 1, lo + sz + sz - 1));
      }
    }
  }

  static sortCore(lo, hi) {
    if (hi <= lo) {
      return ;
    }

    const mid = lo + Math.floor((hi - lo) / 2);

    this.sortCore(lo, mid);
    this.sortCore(mid + 1, hi);

    this.merge(lo, mid, hi);
  }

  // 原地归并（直接修改数组），使用辅助空间
  static merge(lo, mid, hi) {
    let i = lo;
    let j = mid + 1;

    // ！！！如果每次都要执行下方的语句，排序事件将极大的延长
    // const temp = [];

    let temp = this.temp;

    for (let k = lo; k <= hi; k++) {
      temp[k] = this.array[k];
    }

    for (let k = lo; k <= hi; k++) {
      // 左半侧用完
      if (i > mid) {
        this.array[k] = temp[j++];
      }
      // 右半侧用完
      else if (j > hi) {
        this.array[k] = temp[i++];
      }
      else if (this.less(temp[i], temp[j])) {
        this.array[k] = temp[i++];
      }
      else {
        this.array[k] = temp[j++];
      }
    }
  }
}

module.exports = Merge;
