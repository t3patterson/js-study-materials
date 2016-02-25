
// Example

// The purpose of this first exercise is just to show how 
// assertions work and how the homework should be carried out. 
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one. 
function addOne(x){
  return x + 1
}

console.assert(addOne(1) === 2)

// Part 0

// Fix the following code so that the assertion passes. 

var doubleNum = function(num) {
  var newNum = num * 2
}

console.assert(doubleNum(5) === 10)


/**
 * PART 1
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */

function sum(x,y){
  return x + y
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

// PART 2

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside 
// of your average function.
function sum(x,y){
  return x+y
}

function averageSimple(x, y){
  return sum(x,y) / 2;
}

function averageRobust(){
  var args = Array.prototype.slice.call(arguments);

  var result = args.reduce(function(prev,curr,i,arr){
    return prev += curr
  },0);

  return result/args.length;
}

var average = averageRobust;


console.assert(average(8,12) === 10);
console.assert(average(100,200) === 150);

/**
 * PART 3
 *
 * Modify your sum function so that if either of its 
 inputs is not a number, it will return "null."
 */

 function sumSimple(x,y){
  if ( typeof x !== 'number' ||
       typeof y !== 'number' ){
    return null
  } else {
    return x + y
  }
 }

function sumRobust(){
  var args = Array.prototype.slice.call(arguments);
  var allNumbers = args.every(function(el){
    return typeof el === 'number'
  })

  if (allNumbers){
    
    var sumTotal = args.reduce(function(prev,curr,i,arr){
      return prev += curr
    }, 0);

    return sumTotal

  } else {
    return null
  }
}

var sum = sumSimple


console.assert(sum(867, 5309) === 6176);
console.assert(sum('867', 5309) === null);
console.assert(sum(true, 5) === null);


// Part 4

// Write a function called isNegative that will tell 
// whether a number is negative or not. 

function isNegative(x){
  if (typeof x === 'number' && x < 0){
    return true
  } else {
    return false
  }
}

console.assert(isNegative(10) === false)
console.assert(isNegative(0) === false)
console.assert(isNegative(-999) === true)
console.assert(isNegative('yeh') === false)


// Now, modify your sum function again, so that it 
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative 
// function inside your sum funciton ***

function sumNoNegsSimple(x,y){
  if ( isNegative(x) === true || isNegative(y) === true ){
    return null
  } else {
    return x + y
  }
}

function sumNoNegsRobust(){
  var args = Array.prototype.slice.call(arguments);

  var noNegsInArgs = args.every(function(el){
    return ( typeof el === 'number' && el < 0 )
  })

  if( noNegsInArgs ){
    return args.reduce( function(p,c,i,arr){ return p += c }, 0 )
  } else {
    return null
  }
}

sum = sumNoNegsRobust

console.assert(sum(5,-5) === null)


// Part 5
// Make the following assertions pass. 

var X = 10
function increment(){
  X++
}
console.assert(X === 10)
increment()
console.assert(X === 11)

// This exercise is meant to demonstrate the concept
// of scope. The variable X here must have global
// scope in order for the assertions to pass. 

// Important note: By convention, GLOBAL variables
// are written in ALL CAPS. I will do the same throughout
// your assignments and the class.

// Since global variables are rarely used and often 
// discouraged, why don't you fix the increment
// function below. Make the following assertions
// pass.

function betterIncrement(v){
  var newVal = v + 1
  console.log(newVal)
  return newVal
}

increment = betterIncrement;

var x = 10;
console.assert(x === 10);
var y = increment(x);
console.assert(x === 10);
console.assert(y === 11);


// Part 6

// Write a function that will find the minimum of four 
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither). 

function minimumSimple(a,b,c,d){
  var arg1 = a, 
      arg2 = b, 
      arg3 = c, 
      arg4 = d;

  var minValue;
  
  if ( arg1 < arg2 && arg1 < arg3 && arg1 < arg4 ) {
    minValue = arg1
  }

  if ( arg2 < arg1 && arg2 < arg3 && arg2 < arg4 ) {
    minValue = arg2
  }

  if ( arg3 < arg1 && arg3 < arg2 && arg3 < arg4 ) {
    minValue = arg3
  }

  if ( arg4 < arg1 && arg4 < arg2 && arg4 < arg3 ) {
    minValue = arg4
  }

  return minValue
}

function minimumRobust(){
  var args = Array.prototype.slice.call(arguments);

  var minimumNumber = args[0];

  args.forEach(function(el){
    if (el < minimumNumber){ minimumNumber = el }
  })

  return minimumNumber
}

var minimum = minimumRobust

console.assert(minimum(1,2,4,0) === 0)
console.assert(minimum(1000,-2,-99,50) === -99)
console.assert(minimum(-1000,-2,-99,50) === -1000)
console.assert(minimum(1000,-2,99,50) === -2)


// Part 7

// Using boolean operators, write a function that will
// return true if either input is a string, but not 
// both or neither. 

console.assert(justOneString('a',5) === true)
console.assert(justOneString(6,'dotron') === true)
console.assert(justOneString('peanut','butter') === false)
console.assert(justOneString(8,null) === false)

// Part 8

// Write a function called doTwice that takes as input a 
// function and invokes that function twice. 

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.

var NUMBER = 10

var incrementGlobalNumber = function(){
  NUMBER = NUMBER + 1
}

var doubleGlobalNumber = function() {
  NUMBER = NUMBER * 2
}

function doTwice(cb){
  cb();
  cb();
}

doTwice(incrementGlobalNumber)
console.assert(NUMBER === 12)

doTwice(doubleGlobalNumber)
console.assert(NUMBER === 48)

// Part 9

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if 
// the value of a certain global variable, called ORACLE, is 
// "YES." Otherwise, it will does nothing.

var ORACLE = 'NO'

function conditionallyInvoke(cb){
  if ( ORACLE === 'YES' ){
    cb();
  }
}

var NUMBER = 48;
conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 48);

ORACLE = 'YES'
conditionallyInvoke(doubleGlobalNumber);
console.assert(NUMBER === 96);

// Part 10

// Make the following assertion work:

function factory(){
  return function(){
    return 'hello world';
  }
}

console.assert(factory()() === 'hello world');  // INCEPTION!


// Part 11

// Want more? 

function factory2(){
  return function(str){
    return str
  }
}

console.assert(factory2()('you sly dog') === 'you sly dog')
console.assert(factory2()(999) === 999)

// Part 12

// This can't be healthy...
function factory3(str){
  return function(){
    return str
  }
}

console.assert(factory3('i have reached function nirvana')() === 'i have reached function nirvana')
console.assert(factory3(100)() === 100)
