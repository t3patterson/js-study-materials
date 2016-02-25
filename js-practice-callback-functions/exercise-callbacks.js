// Exercise 1 (running a sequence of callbacks in a desired order) 
// ------------------------------------------
// Create a function that accepts 3 callbacks and executes them in 2, 3, 1  order.
//   If the minute of the current hour is odd, run the first, if it is even, run the second  

function twoThreeOne(cb1,cb2,cb3){
  cb2();
  cb3();
  cb1();
}

// Exercise 2 (callbacks w/ conditional) 
// ------------------------------------------
// Create a function accepts 2 callback functions but only calls 1 of them
//    depending on the minute of the day

function runEvenOrOdd(cb1,cb2){ 
  d = new Date();
  var minute = d.getMinutes();

  if(minute % 2 === 0){
    cb1()
  } else {
    cb2()
  }
}


// Exercise 3 ( examination of passing an array to a callback ) 
// ------------------------------------------
// Write a function that takes an array as the 1st argument and a callback_fn as the 2nd
// ...the callback_fn should receive as parameters:
//     the 1st element of the array, the index #, and the whole array

var someNames = ["Jimmy", "Sally", "Georgie"]

function doSthToFirstElement(arr, fn){
  fn(arr[0],0,arr);
}

//Exercise 4 (iterating over an array of functions and executing them one by one)
// ------------------------------------------
// Create a function that accepts an array of functions. 
//   The function you build will execute each function in the array.

var myListOfTasks = [
  function(){ console.log('hey mister'); },
  function(){ alert('this is gonna hurt real bad');},
  function(){ console.log('why did i sign up for this?');}
]

function runAllTehCallbacks(arrOfFun){
  for (var i = 0 i < arrOfFun.length; i++){
    arrOfFun[i]()
  }
}

//Exercise 5 (iterating over an array of callbacks that expects & accepts a string as an argument)
// ------------------------------------------
// Create a function that accepts a string and an array of functions. 
//   The function will execute each function within the array AND pass each function the string argument

var anotherListOfTasks = [
  function(str){ alert('so your name is <' + str +'>'); },
  function(word){ console.log('wow cool okay so the word <'+word+'> has <'+ str.length + '> characters'); },
  function(arg){ prompt('Are you starting to notice that we can do a lot with callback-functions + the argument: '+arg+'?', '');}
  function(something){ console.log("and in this case, the string is passed but nothing is done with it.")}
]

function runCallbacksPassString(myString ,arrOfFun){
  for (var i = 0 i < arrOfFun.length; i++){
    arrOfFun[i](myString)
  }
}

//Exercise 6 (validate object and execute cb with object as parameter)
//----------------------------------------
// Create a function that accepts 2 arguments: an object and a callback
//    Create an if-statement evaluate whether the object's `.accepted` property evaluates to `true`, 
//    and if, so execute the callback WITH the object passed as an argument

function passMeAsCb(o) {
  console.log( 'allllrigght! <'+ o.name + '> is part of the super-secret club!' )
  console.log( 'Age in dog years: <'+ o.age/7 +'>' )
  console.log(' ----------+----------')
}

function alsoPassMeAsCb(o) {
   alert("looks like i've been executed but i'm not gonna do anything with the arg passed to me");  
}

var person1 = {
  name: 'Carol',
  age: 33,
  haircut: 'mullet',
  accepted: true
}

var person2 = {
  name: "Gary"
  children: ['Gracie', 'Willy'],
  age: 47,
  accepted: false
}

var person3 = {
  name: 'Shamu',
  age: 22,
  haircut: 'not sure, but whale-like'
  accepted: true
}

var person4 = {
  name: 'Ice Age Caveman',
  age: 10006,
  accepted: false
}

//Write your function down here -----

function runOnlyWhen(obj,cb){
  if (obj.accepted === true){
    cb(obj)
  }
}
