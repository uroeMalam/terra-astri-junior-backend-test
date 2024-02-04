// Case 3:  The Never ending Palindrome Quest

/**
 * Checks if a given string is a circular palindrome.
 * A circular palindrome is a string that remains a palindrome when rotated.
 * For example, "radar" and "aradr" is a circular palindromes.
 *
 * @param {string} str - The input string to check for circular palindrome.
 * @returns {boolean} - Returns true if the string is a circular palindrome, otherwise false.
 */

function isCircularPalindrome(word) {
  function isPalindrome(s) {
    return s === s.split("").reverse().join("");
  }

  const wordLength = word.length;

  // validate: a single character or an empty string is not allowed
  if (wordLength < 2) {
    return false;
  }

  // cleansing: Convert the word to lowercase for case-insensitive comparison
  word = word.toLowerCase();

  // Loop through each possible starting point
  for (let i = 0; i < wordLength; i++) {
    // Construct the rotated string
    const rotatedWord = word.slice(i) + word.slice(0, i);

    // Check if the rotated string is a palindrome
    if (isPalindrome(rotatedWord)) {
      return true;
    }
  }

  // If the loop complete without returning true
  // then the string is not a circular palindrome
  return false;
}

// Examples
console.log(isCircularPalindrome("racecar")); // Output: true
console.log(isCircularPalindrome("hello world")); // Output: false
console.log(isCircularPalindrome("mAlAyAlaM")); // Output: true
