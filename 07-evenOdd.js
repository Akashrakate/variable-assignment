
console.log("===================================================");

var checkEvenOrOdd= function(num){
   if (num%2==0) {
        return "EVEN";
   } else {
         return "ODD";
   }

}
var result = checkEvenOrOdd(45);
   console.log(`To check number 45 even or odd : ${result}`);
   
var result = checkEvenOrOdd(70);
console.log(`To check number 70 even or odd : ${result}`); 
  
var result = checkEvenOrOdd(67);
console.log(`To check number 67 even or odd : ${result}`);

var result = checkEvenOrOdd(98);
console.log(`To check number 98 even or odd : ${result}`);

console.log("===============================================================");


var checkVoteEligibility=function (age){
     if (age>=18) {
         return "Eligible To Vote";
     } else {
         return "Not Eligible To Vote";
     }

}
    
var result= checkVoteEligibility(18);
   console.log(`To check eligible for vote or not eligible for vote age 18: ${result}`);

var result= checkVoteEligibility(20);
   console.log(`To check eligible for vote or not eligible for vote age 20: ${result}`);

var result= checkVoteEligibility(17);
   console.log(`To check eligible for vote or not eligible for vote age 17: ${result}`);

 var result= checkVoteEligibility(40);
   console.log(`To check eligible for vote or not eligible for vote age 40: ${result}`);

   console.log("==============================================================================");

   function checkStringLength(str) {
    if (str.length>10) {
        return "More than 10 characters";
    } else {
        return "Not more than 10 characters";
    }

}
var result= checkStringLength("javascript-ES6")
 console.log(`To check string contains more than 10 character or not "javascript-ES6"  : ${result} `);





     console.log("==================================================================================");

     function stringStartsWithJava(str) {
         if (str.startsWith("java")) {
            return "Start with 'java'";
            
         } else {
            return "does not start with 'java'";
         }
        
     }
     var result = stringStartsWithJava ("javascript Language");
       console.log(`check the string starts with java "javascript Language": ${result}`);

    var result = stringStartsWithJava ("programming Language");
       console.log(`check the string starts with java "programming Language" : ${result}`);

       console.log("=============================================================================");
       
       
     



