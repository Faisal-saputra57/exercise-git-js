function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  

  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("hello")); // false
  