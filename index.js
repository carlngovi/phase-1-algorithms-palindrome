function reverse(word) {
  let wordArray = word.split('');
  //split a string into an an array of substring
  
  let reversedWordArr = wordArray.reverse();
  //reverse the order of the element in an array.

  let reversedWord = reversedWordArr.join('');
  //concatenates all the elements of an array
  return reversedWord;
  
}

function isPalindrome(word) {
  let reversedWord = reverse(word)

  if(reversedWord === word) {
    return true;

  } else {
    return false
  }
}


/* 
  Add your pseudocode here
 this function should return true if the word is a palindrome and false if the word is not. i will reverse the string the string input.

 if (input is the same as reversed) {
  return true;
 }
 
  else {
    return false
  }
*/

/*
  Add written explanation of your solution here
  I created the function for reverse, then declared all the variables that we are going to use in it.

  I created another function and declared another variable with the same name as our return in the first function. then i wrote the if statement that is to  check if the reversed word has the same spelling as the original word, if true, the console is to log true, and if not, the console is to log false
   
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;