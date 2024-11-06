


 
console.log("======================Function Length & square====================");
function squareOfWordLength(givenString) {
          var strLength = givenString.length;
          var result = strLength*strLength ;
          return result ;  
}
 var returnValue =squareOfWordLength("JavaScript");
 console.log(`The word is JavaScript and its length square is ${returnValue}`);

 var returnValue =squareOfWordLength("Google Chrome");
 console.log(`The word is Google Chrome and its length square is ${returnValue}`);

 var returnValue =squareOfWordLength("Web Developer Smart");
 console.log(`The word is Web Developer Smart and its length square is ${returnValue}`);


console.log("============================== Division & Multiple=================================");




 function stringOperation (given) {
    var strLength= given.length;
    var words = given.split(" ");
    var totalWords= words.length;
    var  strdivision  = strLength / totalWords ;
    console.log(`The string "I Am Angular Developer" string length and divide by total number words is:${strdivision}`);
    var multiple= strLength*totalWords;
    console.log(`The string "I Am Angular Developer" string length and multiple by the total words is:${multiple}`);
    
    
    
 }
   stringOperation("I Am Angular Developer") 