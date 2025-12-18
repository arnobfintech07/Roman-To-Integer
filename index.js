//created a function to get the index
function getIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; 
    }
  }
  return -1;
}

function romanToInt(romanStr) {
  const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const values = [1, 5, 10, 50, 100, 500, 1000];

  let total = 0;

  for (let i = 0; i < romanStr.length; i++) {
   //to store the index value of roman string
   let currentIndex = getIndex(symbols, romanStr[i]);
    let nextIndex = getIndex(symbols, romanStr[i + 1]);
  //to get the index value of values as per the symbols
     let currentVal = values[currentIndex];
    let nextVal = values[nextIndex];
    // If current is smaller than the next, subtract it.
    // Otherwise, add it.
    if (currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }
    return total;
}

// Tests
console.log(romanToInt("IX"));      // 9 
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("LVIII"))//58