
// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

function getFullNames(arr){
    var nameArray = [];
    
    for (var i = 0 ; i < arr.length; i++){
        nameArray.push(arr[i].first + " " + arr[i].last)
    }
    return nameArray
}



console.assert(getFullNames(customers)[1] === "John Smith")
// --- TESTS PASSED



// Part 2

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

var text = "It’s obviously not the case, but T’Challa—the Black Panther and mythical ruler of Wakanda—has always struck as the product of the black nationalist dream, a walking revocation of white supremacist myth. T’Challa isn’t just a superhero in the physical sense, he is one of the smartest people in the world, ruling the most advanced civilization on the planet. Wakanda’s status as ever-independent seems to eerily parallel Ethiopia’s history as well as its place in the broader black imagination. Maybe it’s only me, but I can’t read Jason Aaron’s superb “See Wakanda And Die” and not think of Adowa.\
Comic book creators, like all???? story-tellers, get great mileage out of myth and history. But given the society we live in, some people’s myths are privileged over others. Some of that is changing, no doublet. In the more recent incarnations of T’Challa you can see Christopher Priest invoking the language of the Hausa or Reginald Hudlin employing the legacy of colonialism. These were shrewd artistic decisions, rooted in the fact that anyone writing Black Panther enjoys an immediate, if paradoxical, advantage: the black diaspora is terra incognita for much of the world. What does the broader world really know of Adowa? Of Nanny and Cudjoe? Of the Maji-Maji rebellion? Of Legba and Oshun?  Of Shine? Of High John The Conqueror? T’Challa’s writers have always enjoyed access to a rich and under-utilized pool of allusion and invocation."

function _lastIsAlphabet(wordString){
    var validChars = "'abcdefghijklmnopqrstuvwxyz"

    var wordLen = wordString.length
    var lastCharOnWord = wordString[wordLen-1]
    
    var lastIsAlphabet = false;

    for (var i = 0; i < validChars.length ; i++ ){
        if (lastCharOnWord === validChars[i]){
            lastIsAlphabet = true;
        } 
    }

    return lastIsAlphabet
}

function stripEndingPunctuation(wordString){
    console.log('stripping')
    var originalWord = wordString
    
    if ( _lastIsAlphabet(wordString) === true ){
        
        return originalWord
    } else{
        
        modifiedWord = originalWord.slice(0,wordString.length-1)

        if( _lastIsAlphabet(wordString) === false) {
            return stripEndingPunctuation(modifiedWord)
        } else {
            return modifiedWord       
        }

    }
}


function getCounts(str){
    var wordsList = str.toLowerCase().split(' ');

    var wordTracker = {};

    for (var i = 0; i < wordsList.length ; i++){
        if (wordsList[i] === "" ){ continue; }

        var cleansedWord = stripEndingPunctuation( wordsList[i] )
        
        if ( wordTracker.hasOwnProperty( cleansedWord ) === true){
            wordTracker[ cleansedWord ] += 1
        } else {
            wordTracker[ cleansedWord ] = 1
        }
    }

    console.log(wordTracker);

    return wordTracker;
}

var wordFrequencyObject = getCounts(text)

console.assert(wordFrequencyObject.but === 3)
console.assert(wordFrequencyObject.black === 5)

// --- TESTS PASSED


// Part 3

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. It should have a 
// speak() method that receives a string as input and returns a new version of that 
// string where the first letter of every word is replaced with the letter 'r'.

//NOTES: checkout Constructor Functions 
//       and take how the `this` keyword works in js

// «string».slice() method could be useful


var generateDog = function(){
    this.legs = 4
    this.speak = function(msg){
        var wordsArr = msg.split(' ')

        for (var i = 0 ; i < wordsArr.length ; i = i + 1){
            
            wordsArr[i]="r" + wordsArr[i].slice(1, wordsArr[i].length)

        }

        return wordsArr.join(' ')
    }
}

    var dog = new generateDog()
    console.log(dog.speak("i love you"))

console.assert(dog.legs === 4)
console.assert(dog.speak('i love you') === 'r rove rou')


// Part 4 

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.
//   for-in

// **** TESTS PASSING ****
function pluck(arrayOfObjects, propName){
 var pluckedValues = []

 for (var i = 0 ; i < arrayOfObjects.length ; i++){

    for ( var keyName in arrayOfObjects[i] ){
        if (keyName === propName){ 
            pluckedValues.push( arrayOfObjects[i][keyName] ) 
        };
    }
 }

 return pluckedValues;
}



var stooges = [
    {name: 'moe', age: 40}, 
    {name: 'larry', age: 50}, 
    {name: 'curly', age: 60}
]

console.log( pluck(stooges, 'name')[0])

console.assert(pluck(stooges, 'name')[0] === 'moe')
console.assert(pluck(stooges, 'age')[2] === 60)



 console.assertto fit the problem-description

//ORIGINAL: console.assert(flippedUsers['president@gmail.com'] === 'obama')
//REVISED:  console.assert(flippedUsers[0]['president@gmail.com'] === 'obama')

// Part 5

// Write a function reverseObjects that takes an array of objects as input
// and returns an array of those same objects, but with the properties and 
// values reversed.

// **** TESTS PASSING ****
//   Note: had to modify the

// 
//      TASK INPUT: an array of objects, string
//      TASK OUTPUT: an array of values

//          and an array of objects and a string
//          the string argument will represe
//      
//       you need to loop over the arrayOfObjects, 
//       
    //       inside the for-loop for each object in the arrayOfObjects, 
    //       you will need to use a for-in loop to iterate over that object
    //       to access each key as a string value 
    //       (and you will access each key's value using object-bracket notation). 
    //       
    //       within the for-in loop you will create an empty object 
    //         where you will add the 'flipped' properties/values of the previous.
    //         NOTE: you will add the 'flipped' properties using object-bracket notation
    //       
//           
//       the for-in loop lets you access the property as a string
//          


var reverseObjects = function(arrayOfObjects){
    var newArr = []


    for (var i = 0 ; i < arrayOfObjects.length ; i++){
        var reversedObject = {}
        var originalObject = arrayOfObjects[i]
        
        for ( var keyName in originalObject ){
            reversedObject[originalObject[keyName]] = keyName
        } 

        newArr.push(reversedObject)
    }

    return newArr
}

var users = [{obama: 'president@gmail.com'},{trump: 'americamoneywin@yahoo.com'},{bush: 'jeb!@hotmail.com'}]

var flippedUsers = reverseObjects(users)

console.log(flippedUsers)

console.assert(flippedUsers['president@gmail.com'] === 'obama')
console.assert(flippedUsers['americamoneywin@yahoo.com'] === 'trump')

// Part 6

// The code below doesn't work. Can you fix it?

var makeItTom = function(object) {
	for (var prop in object) {
		if (prop === 'name') object.prop = 'Tom'
	}
	return object
}

var sampleObject = {
	mass: '5.972 × 10^24 kg',
	age: '4.543 billion years',
	name: 'Earth'
}

var planetTom = makeItTom(sampleObject)

console.assert(planetTom.name === 'Tom')

// VVV caution: hints below VVV

console.assert(planetTom['name'] === 'Tom')
console.assert(planetTom.prop === undefined)
console.assert(planetTom['prop'] === undefined)

// What did you learn about the difference between
// bracket syntax and dot syntax for object attributes?


// Part 7
// -----------
// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions.
// -----------

var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

function where(collection, obj){
    
    var filteredCollection = []

    for (var i = 0 ; i < collection.length ; i++){
        var collObjHasAllInputObjValues = true;

        for (var key in obj){

            if (obj[key] !== collection[i][key] ){
                collObjHasAllInputObjValues = false;
            }

        }

        if (collObjHasAllInputObjValues === true){
            filteredCollection.push(collection[i])
        }
    }

    return filteredCollection

}

var sh8spr = where(plays, {author: "Shakespeare"})
console.assert(sh8spr instanceof Array)
console.assert(sh8spr.length === 5)
console.assert(sh8spr[0].title === "Cymbeline")

sh8spr = where(plays, {author: "Shakespeare", year: 1611})
console.assert(sh8spr.length === 0)

sh8spr = where(plays, {author: "Shakespeare", year: 1623})
console.assert(sh8spr.length === 2)

var midcentury = where(plays, {year: 1949})
console.assert(midcentury.length === 2)


// Part 8

// Create an object that has a name attribute and a method called personalize. 
// personalize should take a function as input. when personalize is called, 
// an introductory string should be inserted before the input function's
// return value. Use the example in the console.assert to understand
// exactly how you should write the method. Including the period! 

var politeObject = {
    name: "Frank",
    personalize: function(cb){

        return "Hi, my name is " + this.name + ", and the result is " + cb() +"."
    }
}

var helloWorld = function() {
    return "hello world"
}

var personalizedResult = politeObject.personalize(helloWorld)
console.log(personalizedResult)
console.assert(personalizedResult === "Hi, my name is Frank, and the result is hello world.")
