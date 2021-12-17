const memoizAddition = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log('Fetching from cache');
      // Here, cache.value cannot be used
      // as property name starts with the number
      // which is not a valid JavaScript identifier.
      // Hence, can only be accessed using the square bracket notation.
      return cache[value];
    } else {
      console.log('Calculating result');
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};

// returned function from memoizAddition
const addition = memoizAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached
