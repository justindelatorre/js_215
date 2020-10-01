function myFilter(array, func) {
  let newArray = [];
  array.forEach(element => {
    if (func(element)) {
      newArray.push(element);
    }
  });

  return newArray;
}

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]);  // [ 3, 5, 18, 15 ]
