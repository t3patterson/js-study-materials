##Iterables (working with arrays)

###1) Iterables coming to life w/ HTML  + CSS
show fizz buzz rendering on the DOM. 

Show how we can use the logic of fizz buzz to print out html-text-stings which we can insert onto the page

We can add all kinds of info to our strings, from the content (the numbers and 'fizz' text) to dictating the styles through adding a class-name


###2) Get a handle on the problem...
1- What am i starting with?
  - a number
  - array of numbers
  - a string (a single character, word, a sentence)
  - array of strings

2- What do I need to return?
  - a word 
  - a number (like a total,or max/min, etc)
  - a new array 
  - true/false

###3) Let's solve some like-kind problems and then we'll start pointing out some patterns







###3) Problem-Solving Patterns w/ For-Loops

**What Familiar Instinct Tells You**
1) declare the function
2) the function should take an array as an argument
3) iterate over the array
4) perform logic on each element of the array
5) return the result
--------------
**What You Have To Do in Programming-World**
1) declare the function
2) the function will take an array as an argument
**3) create an empty newArray**
4) iterate over the array with a for-loop
5) perform logic on each element of the array 
**5a) push the elements that pass the logic test to the newArray**
**6) return the *newArray***


###2) Using the power of for-loops on strings

**What you should do**
1) declare the function
2) the function will take a string as an argument
**3) use `.split()` to make the string into an array** a la `arrayOfCharacters` or `arrayOfWords`
4) iterate over the string-array with a for-loop
5) perform logic on each element of the array 
**5a) push the elements that pass the logic test to the newArray**
**6) return the *newArray***



