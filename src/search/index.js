const Input = [];

for (let i = 0; i < 100000; i++) {
  Input.push(i);
}

function BinarySearch(array, target) {
  let lo = 0;
  let hi = array.length - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (array[mid] > target) {
      hi = mid - 1;
    }
    else if (array[mid] < target){
      lo = mid + 1;
    }
    else {
      return mid;
    }
  }

  return -1;
}

console.time();
console.log(BinarySearch(Input, 5984));
console.timeEnd();

console.time();
console.log(Input.indexOf(5984));
console.timeEnd();

