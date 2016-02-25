/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr){
  var total = 0;

  for (var i = 0; i < arr.length; i++){
    total += arr[i];
  }

  return total
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

function(){

}

console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){
    // YOUR CODE HERE
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */



console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */


function findLongestWord(sentence){
    var wordsArray = sentence.split(" ");

    var longestWordLength = 0
    
    var longestWordValid
    var longestWordAllChars

    for (var i = 0 ; i < wordsArray.length ; i++){

      var currentWordCache = null
      
      if ( hasReinsertablePunc(wordsArray[i]) ){
        var currentWordCache = wordsArray[i]
      }

      var currentWordValid = stripPunctuation( wordsArray[i] )

      var currentWordLength = currentWordValid.length

      if ( currentWordLength > longestWordLength){
        longestWordLength = currentWordLength;
        longestWordValid  = currentWordValid;
        longestWordAllChars = currentWordCache ? currentWordCache : longestWordValid
      } 
    }

    console.log(stripEndingPunc( longestWordAllChars ))
    return stripEndingPunc( longestWordAllChars );
}

function hasReinsertablePunc(str){
  var reinsertables = ["'", "-"]
    
  for (var i = 0 ; i < reinsertables.length ; i++){
    if (str.indexOf(reinsertables[i]) > -1 ){
      return true
    }
  }

  return false
}

function stripEndingPunc(str){
  var forbiddenChars = ["!", ",", "." , '?', '"', ':', ';'];

  var lettersArray = str.split('');
  
  for (var i = 0 ; i < forbiddenChars.length; i++){
    if ( lettersArray[str.length - 1] === forbiddenChars[i] ) {
      lettersArray.pop();
    }
  } 

  return lettersArray.join("");
}

function stripAllPunctuation(str){
  var lettersArray = str.split('');

  var forbiddenChars = ['.',',','"','!', '?', "'", "-", ";", ":", "$", "@"]

  var noPuncsWordArray = [];

  for (var i = 0 ; i < lettersArray.length ; i++ ){
    var chr = lettersArray[i];
      
    if ( forbiddenChars.indexOf(chr) === -1  ) {
      noPuncsWordArray.push(chr);
    }
  }

  return noPuncsWordArray.join("")
}


console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
console.assert(findLongestWord("donnutst't mess with disney") === "donnutst't")
console.assert(findLongestWord("billy bag of donutholes") === "donutholes")
console.assert(findLongestWord("do you like Britney? answer now pleez!") === "Britney")
console.assert(findLongestWord("my name is jake white-olson, what is your name guy?") === "white-olson")


/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */



console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
 