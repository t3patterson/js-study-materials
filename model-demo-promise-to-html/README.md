###1) Wire-up everything
- `index.html`
- `styles.css`
- `main.js`

###2) Add jQuery
- we use jQuery for promises-- `$.getJSON()`, `$.ajax()`, 
1. go get jquery from CDN
2. load it *before* your `main.js` tag
3. `console.log($)` (`$` is the sign for jQuery library)

###3)Easy API
- [Random User Generator](https://randomuser.me/api/)
- Get JSON View extension from Chrome Web Store
  - *Settings > Extensions > Get More Extensions > JSONView
- You will be getting your data through http: urls...
    - you can test the response with your browser
    - 

###4)Access in code & inspect in console
Access in code
```js
$.getJSON("https://randomuser.me/api").then(function(dataResponse){
    console.log(dataResponse)
})
```

...and then check out the Chrome console


###5)Put that ish on the page
make sure that you are accessing the data correctly
```
  
```


###3) Why promises?
- The code you've seen so far has been totally *synchronous*. You give a set of instructions and the code runs in that order. 


#####Example of Synchronous Code:
    - Build a function `getMaxNumber` that takes an array of numbers and returns the maxNumber
    - Create an array of numbers `numsList = [3, 4, 5, 8]`
    - Pass `numsList` as an argument to `getMaxNumber(numsList)` and store it 
    - Console.log the result

```js
var getMaxNumber = function(arrOfNums){
    var max = arrOfNums[0]
    
    for (var i = 0; i < arrOfNums.length ; i++){
        if (arrayOfNums[i] > max){ max = arrOfNums[i] }
    }

    return max
}

var numsList = [4, 66, 7, 28, 21]
var maxInList = getMaxNumber(numsList)
console.log(maxInList)
```


However, in a real application, there are many parts of our code that will have a characteristic of *asyncrhonicity*. Meaning, we won't have certain data/input, but we expect to have it at some point and we will need to execute code *after* the data/input is received.

#####Example of asynchronous code: *Event Listeners*
```js
    console.log ('me first');

    someButton_el.addEventListener('click', function(){
        console.log('i happen and only when clicked')
    })

    console.log('then me')
```

#####Example of asynchronous code: `setTimeout`/`setInterval`
```js
    console.log ("i go first");

    setTimeout( function(){
        console.log("second in line, but now I go!")
    }, 10)

    console.log("i am after setTimeout...but i'll go before")
```

#####Example of asynchronous code: *Using a 'promise' to fetch external data*
```js
    $.getJSON("«http://some.url.com/api/that/returns/json»").then(function(response){
        //do something
    })
```
- we use a 'promise' because we don't know *when* we will receive the a data. You've seen more or less how they work with justin's setTimeout and the rocket example. Knowing *how they work* is good, but for now it will be okay *knowing how to make them work*.

- key feature of a promise is 
  1. an async-operation method that executes and performs an action outside your script (typically getting data from a server)
  2. `.then()` method 'chained' after the method is executed.
  3. a *callback function* passed as a parameter to the `then` method - a la 
     `.then( function(){ ... } )` 
  4. the response-data is passed to the `.then()`'s *callback function* **as a parameter** once the promise is 'resolved'

In total the structure looks like this:
```js
  //1)async-op     2) when data is ready... 
  goFetchSomeData().then(function(data){
    //3) pls execute this    //4)  ^^ using the response-data passed to me
    console.log(data)
  })
```


