function myForEach(array, func) {
  for (let idx = 0; idx < array.length; idx++) {
    func(array[idx]);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3
