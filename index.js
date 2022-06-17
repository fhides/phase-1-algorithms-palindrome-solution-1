function reverseString(word){
  const wordArray= word.split("");
  const reverseWordArray =wordArray.reverse();
  const reversedWord = reverseWordArray.join("");
  return reversedWord;
}


function isPalindrome(word) {
  // Write your algorithm here

  const reverseWord =reverseString(word);
  if(word=== reverseWord){
    return true;
  }
  else{
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
