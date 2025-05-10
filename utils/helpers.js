function isPrime(n) {
    n = parseInt(n);
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function processData(data = []) {
    const numbers = data.filter(x => /^\d+$/.test(x));
    const alphabets = data.filter(x => /^[a-zA-Z]$/.test(x));
  
    const lowercase = alphabets.filter(x => x === x.toLowerCase());
    const highest = lowercase.length
      ? [lowercase.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))[0]]
      : [];
  
    const is_prime_found = numbers.some(num => isPrime(num));
  
    return {
      numbers,
      alphabets,
      highest_lowercase_alphabet: highest,
      is_prime_found
    };
  }
  
  module.exports = { processData };
  