const _ = require('lodash');

/**
 * 基本的排序类
 */
class Sort {
  static less(a, b) {
    return a - b < 0 ? true : false;
  }

  // 交换数组中的两项
  static exch(i, j) {
    const array = this.array;

    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // 打印数组
  static show(array) {
    // array.forEach(item => console.log(item));
    console.log(this.array);
  }

  // 是否是有序的
  static isSorted() {
    const array = this.array;
    for (let i = 1; i < array.length; i++) {
      // 理论上后置位的元素应大于或等于前置位的元素
      if (this.less(array[i], array[i - 1])) {
        return false;
      }
    }
    return true;
  }

  static sort(array) {
    this.array =  _.clone(array);
  }
}

module.exports = Sort;
