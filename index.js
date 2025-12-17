function romanToInt(romanStr) {
  const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const values = [1, 5, 10, 50, 100, 500, 1000];

  let total = 0;

  for (let i = 0; i < romanStr.length; i++) {
    // Get the value of current and next symbols from our arrays
    let currentVal = values[symbols.indexOf(romanStr[i])];
    let nextVal = values[symbols.indexOf(romanStr[i + 1])];

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
console.log(romanToInt("IX"));      // 9 (10 - 1)
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("LVIII"))