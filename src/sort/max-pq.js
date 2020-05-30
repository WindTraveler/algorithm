const Sort = require('./base');

class MaxPq {
  constructor() {
    // 第一个元素始终不用
    this._pq = [undefined];
    // 可用的下标最大值，0 表示无可用下标
    this._N = 0;
  }

  insert(a) {
    this._pq[++this._N] = a;
    this.swim(this._N);
  }

  delMax() {
    const max = this._pq[1];

    this._pq[1] = this._pq[this._N];
    this._pq[this._N--] = undefined;

    this.sink(1);

    return max;
  }

  swim(k) {
    const parentKey = Math.floor(k / 2);
    while (k > 1 && this.less(parentKey, k)) {
      this.exch(parentKey, k);
      k = parentKey;
    }
  }

  sink(k) {
    while (2 * k <= N) {
      let j = 2 * k;
      if (j < N && this.less(j, j + 1)) {
        j++;
      }

      if (!this.less(k, j)) {
        break;
      }

      this.exch(k, j);
      k = j;
    }
  }

  /**
   * 比较下标 i 和 j 元素的大小
   * @param i 为数组下标，并非值
   * @param j 为数组下标，并非值
   */
  less(i, j) {
    return this._pq[i] < this._pq[j];
  }

  /**
   * 交换下标 i 和 j 元素的位置
   * @param i 为数组下标，并非值
   * @param j 为数组下标，并非值
   */
  exch(i, j) {
    const temp = this._pq[i];
    this._pq[i] = this._pq[j];
    this._pq[j] = temp;
  }
}
