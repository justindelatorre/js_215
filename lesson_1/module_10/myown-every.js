function myOwnEvery(array, func) {
  let result = true;
  array.forEach(element => {
    if (!func(element)) {
      result = false;
    }
  });

  return result;
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true
