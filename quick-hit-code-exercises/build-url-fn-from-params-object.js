// TASK:  Create a `buildFullURL` function that builds a full-url string from
//          from a string (root-url) and 
//          an object (with the properties + values as keys + values of a query-string^^)
//
// ==============================================================================
//             
//    EXAMPLE USE: 
//    ----------------------------------------------------------------------------
//    someParams = {
//        status: 'active', 
//        region: 'nw', 
//        gender: 'male'
//      }

//    var myFullURL = buildFullURL("http://somewhere.com/api/", someParams)

//    //--> "http://somewhere.com/api/?status=active&region=nw&gender=male"


//   NOTE:
//   ----------------------------------------------------------------------------
//   The buildFullURL function should accept two arguments: 
//        - a string (for the rootURL)
//        - an object (containing the args of the query-string)
//     
//     and the function should return a full-url as a string 



var superParams = {
  apiKey: '892hfw',
  nat: "ice",
  lang: 'EN'
}
var theFullURL = buildFullURL('http://hungry4more.com/api', superParams)

console.log(theFullURL)
console.assert(theFullURL === "http://hungry4more.com/api?apiKey=892hfw&nat=ice&lang=EN")


// ==============================
// ^^ CONTEXT NOTE: query-strings

//       query-strings are used as ADDITIONAL-INFO at the end of a URL 
//       when making a request to a server            ^^^^^^^^^^^^^^^^

//      
//       the structure is this: 
//                  `? key=value`                   (for a single argument)

//                  `? key1=value2 & key2=value2 `  (for multiple arguments)

//      
//       A hypothetical example in context:

//                    . . . . root url . . . . . /- - - - query-string - - - - - - - 
//                    . . . . . . . . . . . . . /- - - - - - - - - - - - - - - - - -   
//         myFullURL= "http://somewhere.com/api/?status=active&region=nw&gender=male")
//                    . . . . . . . . . . . . / - - - - - - - - - - - - - - - - -               
//                   . . . . . . . . . . . . / - - - - - - - - - - - - - - - - - - -              



//       you often see them used in the following contexts:

//           + to limit/specify the QUANTITY of results (ex: "limit=33")
//           + to narrow the TYPES of results           (ex: "gender=female" ) 
//           + to submit an API key                     (ex: "apiKey=8mnSPx")
//           + to determine a data-type response        (ex: "type=xml" )
//           ... and more                               (ex: "order=descending"
//                                                           "images=true"      )

