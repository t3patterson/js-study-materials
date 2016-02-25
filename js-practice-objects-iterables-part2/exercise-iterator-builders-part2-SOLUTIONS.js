// EXERCISE 1 (build an array of objects from an array of strings)
// ------------------------
// Convert an array of strings into an array of objects.

// eg. result = [
//  {firstName: 'Chuck', lastName: 'Norris'}
//  ...
// ]
//


var realNinjas = [
  'Chuck Norris',
  'Jackie Chan',
  'Lucy Liu',
  'Billy Blanks',
  'Michelle Yeoh',
  'Jet Li'
]

function createListOfObjects(arr){
  var arrayOfObjects = []
  
  for (var i = 0; i < arr.length; i++){
    var firstLastArray = arr[i].split(" ");
    var firstLastObject = {
      firstName: firstLastArray[0],
      lastName: firstLastArray[1]
    };
    arrayOfObjects.push(firstLastObject);
  } 

  return arrayOfObjects
}

var ninjaListOfObjects = createListOfObjects(realNinjas)

console.assert(typeof ninjaListOfObjects[0] === "object")
console.assert(ninjaListOfObjects[0].firstName === "Chuck")
console.assert(ninjaListOfObjects[1].lastName === "Chan")



// EXERCISE 2 (taking an object and transforming it to another modified object)
// ---------------------------------------
// The so-hot-right-now framework `React` contains a keyMirror utilitiy 
//  to help developers normalize the naming of shared properties/methods to avoid errors.

// Write a `keyMirror` function that takes an object with a set of properties 
// whose values are set to `null`. The function should return another object 
// with the properties 'mirrored' with both the properties & values
// as an UPPERCASE string

// var myActionNames = {
//    GET_records: null,
//    GET_SINGLE_RECORD: null,
//    ...
// }

// keyMirror(myActionNames) => 
// {
//   GET_RECORDS: 'GET_RECORDS',
//   GET_SINGLE_RECORD: 'GET_SINGLE_RECORD',
//   ...
// }

var keyMirror = function(obj){
  var mirroredObject = {} 
  for (var kee in obj){
    mirroredObject[kee.toUpperCase()] = kee.toUpperCase()
  }
  return mirroredObject
}

var myActionNames = {
   GET_records: null,
   GET_SINGLE_RECORD: null,
   Create_RECORD: null,
   update_record: null,
   DELETE_RECORD: null
}

var actionNamesIndex = keyMirror(myActionNames)

console.log(actionNamesIndex)

console.assert(actionNamesIndex.GET_RECORDS === 'GET_RECORDS')
console.assert(actionNamesIndex.GET_records === undefined)
console.assert(actionNamesIndex.CREATE_RECORD !== 'Create_RECORD')


// EXERCISE 3 (string building from an array)
// ------------------------
// Create a concatenated html string that loops over an array of objects 
//   and converts each one them to this:
//   <span class='article-tags'> «..string..» </span>
//  
// Your function should ultimately return with something like this:
//    "<span class='article-tags'>interesting</span><span class='article-tags'>hilarious</span>....."

var articleTags = ['interesting','hilarious','society','wtf','awesome']

function createSpanTags(arr){
  var articleSpanTags=""
  for (var i = 0; i < arr.length ; i++){
    articleSpanTags += '<span class="article-tags">'+arr[i]+'</span>';
  }

  return articleSpanTags
}

var spanHTMLString = createSpanTags(articleTags)


//NOTE: test to see that the string was concatenated correctly
console.assert(
  spanHTMLString.indexOf('<span class="article-tags">society</span>') > 0
)

//NOTE: test to see that there all the span tags are there
console.assert( 
  spanHTMLString.split('<span').length - 1  === 5 &&
  spanHTMLString.split('</span>').length - 1  === 5
)



// EXERCISE 4 (string building from an array of objects)
// ------------------------
// Create a concatenated html string that loops over an array of objects 
//   and converts each one of them to this:

// <li><a href="«..url..»">«..title..»</a></li>

// e.g:  <li><a href="http://www.....">Snuggie</a></li><li><a href="http://www....">Showtime Rotisserie</a></li>

// WARNING: make sure to include to the double-quotes for the href when building your string

var myFavoriteProducts = [ 
  {title: "Snuggie", url: "http://www.awmok.com/wp-content/uploads/2009/11/snuggy1-550x549.jpg"},
  {title: "Ronco Showtime Rotisserie", url: "http://www.asseenontv.com/imgcache/product/resized/000/296/048/catl/00296048-314496_500.jpg"},
  {title: "OxiClean", url: "http://twilightfoundry.com/wp-content/uploads/2014/05/rembm_billymays.jpg"},
  {title: "Shamwow", url: "http://media3.s-nbcnews.com/j/streams/2013/september/130906/8c8881134-shamwowguy.nbcnews-ux-2880-1000.jpg"}
]

function generateTagsWithLinks(arr){
  var htmlString = '';

  for (var i = 0; i < arr.length; i++){
      htmlString += '<li>'
      htmlString += '<a href="'+arr[i].url+'">' + arr[i].title + '</a>'
      htmlString += '</li>'
  }

  return htmlString
}

var htmlString = generateTagsWithLinks(myFavoriteProducts)

//NOTE: test to see that there are 4 opening-and-closing <li>
//      and <a> tags in returnded string
console.assert( 
  htmlString.split('<li').length - 1  === 4 &&
  htmlString.split('</li>').length - 1 === 4
)

console.assert( 
  htmlString.split('<a').length - 1  === 4 &&
  htmlString.split('</a>').length - 1 === 4
)



//NOTE: test to see that the string was build properly
console.assert(
  htmlString.indexOf('<li><a href="http://twilightfoundry.com/wp-content/uploads/2014/05/rembm_billymays.jpg">OxiClean</a></li>') > 0
)









