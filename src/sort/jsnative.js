const Sort = require('./base');

class Jsnative extends Sort{
  static sort(array) {
    super.sort(array);

    this.array.sort((a, b) => a - b);
  }
}

module.exports = Jsnative;
