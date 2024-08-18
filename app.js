// Function to find the largest of three numbers
function findLargest(a, b, c) {
  return Math.max(a, b, c);
}

console.log(findLargest(5, 10, 3)); // Output: 10
console.log(findLargest(8, 2, 6)); // Output: 8

// Function to reverse the order of words in a sentence
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("Hello world!")); // Output: "world! Hello"
console.log(reverseWords("The quick brown fox")); // Output: "fox brown quick The"
console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"

// Function to find the longest word in an array of strings
function findLongestWord(words) {
  return words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}

console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // Output: "banana"
console.log(findLongestWord(["dog", "elephant", "cat"])); // Output: "elephant"
console.log(findLongestWord(["red", "blue", "green"])); // Output: "green"

// Function to count occurrences of words in a sentence
function countWords(sentence) {
  const words = sentence.split(/\s+/);
  return words.reduce((count, word) => {
    word = word.toLowerCase(); // Optional: To handle case sensitivity
    count[word] = (count[word] || 0) + 1;
    return count;
  }, {});
}

console.log(countWords("hello world hello"));
// Output: { hello: 2, world: 1 }

console.log(countWords("this is a test this is only a test"));
// Output: { this: 2, is: 2, a: 2, test: 2, only: 1 }
