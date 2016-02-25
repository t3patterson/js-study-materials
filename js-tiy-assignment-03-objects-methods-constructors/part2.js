// Part 2

// Write a function called getCounts that TAKES a string of text as input 
// and RETURNS an object which stores the frequency of each word in the string.

// 1) What does our function need as INPUT? -- string (words, like a paragraph);

// 2) What does our function give us as OUTPUT? 
///    -- object(properties=words, value=number)

var text = "It’s obviously not the case, but T’Challa—the Black Panther and mythical ruler of Wakanda—has always struck as the product of the black nationalist dream, a walking revocation of white supremacist myth. T’Challa isn’t just a superhero in the physical sense, he is one of the smartest people in the world, ruling the most advanced civilization on the planet. Wakanda’s status as ever-independent seems to eerily parallel Ethiopia’s history as well as its place in the broader black imagination. Maybe it’s only me, but I can’t read Jason Aaron’s superb “See Wakanda And Die” and not think of Adowa.\
Comic book creators, like all story-tellers, get great mileage out of myth and history. But given the society we live in, some people’s myths are privileged over others. Some of that is changing, no doublet. In the more recent incarnations of T’Challa you can see Christopher Priest invoking the language of the Hausa or Reginald Hudlin employing the legacy of colonialism. These were shrewd artistic decisions, rooted in the fact that anyone writing Black Panther enjoys an immediate, if paradoxical, advantage: the black diaspora is terra incognita for much of the world. What does the broader world really know of Adowa? Of Nanny and Cudjoe? Of the Maji-Maji rebellion? Of Legba and Oshun?  Of Shine? Of High John The Conqueror? T’Challa’s writers have always enjoyed access to a rich and under-utilized pool of allusion and invocation."

var getCounts = function(stringOfWords){

  var arrayOfWords = stringOfWords.toLowerCase().split(' ')

  var wordsObject = {}

  // var x = 'isFelon'
  // wordsObject[x] = false  --> { isFelon: false }


  for( var i = 0 ; i < arrayOfWords.length; i = i + 1  ) {

    var word = arrayOfWords[i]
    //wordsObject[word] = 1

    if ( wordsObject.hasOwnProperty(word) === true ){

      wordsObject[word] = wordsObject[word] + 1

    } else {

      wordsObject[word] = 1

    }

  }

  return wordsObject
         // { 
        //    name: 'rufus'
        //    age: 45
        //    but: 3, 
        //    all: 4, 
        //    book: 2 
        //   }
}

var wordFrequencyObject = getCounts(text)
console.log(wordFrequencyObject)

// console.assert(wordFrequencyObject.but === 3)
// console.assert(wordFrequencyObject.black === 5)
