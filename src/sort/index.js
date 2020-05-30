const _ = require('lodash');
const chalk = require('chalk');

const Selection = require('./selection');
const Insertion = require('./insertion');
const Shell = require('./shell');
const Merge = require('./merge');
const Quick = require('./quick');
const Jsnative = require('./jsnative');

const INPUT = [];

for (let i = 0; i < 100000; i++) {
  INPUT.push(Math.random(1));
}

function runSort(sortAlgorithm, array) {
  console.log(`=========== 开始 ${sortAlgorithm.name} ==============`);
  // console.log('排序前', array);

  const startTime = Date.now();
  sortAlgorithm.sort(array);
  const duration = Date.now() - startTime;

  // console.log('排序后');
  // sortAlgorithm.show();

  const colorLog = sortAlgorithm.isSorted() ? chalk.green : chalk.red;

  console.log('是否有序', colorLog(sortAlgorithm.isSorted(array)));
  console.log(`排序算法 ${sortAlgorithm.name} 结束，用时 ${duration} ms`);
  console.log(`=========== 结束 ${sortAlgorithm.name} ==============\n`);
}

runSort(Selection, INPUT);
runSort(Insertion, INPUT);
runSort(Shell, INPUT);
runSort(Merge, INPUT);
runSort(Jsnative, INPUT);
runSort(Quick, INPUT);
