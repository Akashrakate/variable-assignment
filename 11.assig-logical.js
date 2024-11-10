
console.log("1.Count the even number form the array");
let array=[10,20,45,30,77,60];
console.log(array);

let evenNumber=0
for( const element of array){
  if (element%2==0) {
      evenNumber=evenNumber+1;
 }
}
console.log(`Even number is:${evenNumber}`);

console.log("===================================================");

console.log("2.Count the vowels including lower and upper case");

const myLove="I love only JavaScript";
const vowels="aeiouAEIOU";
let countVowels=0;
for( const char of myLove){
  if (vowels.includes(char.toLowerCase())) {
    countVowels= countVowels + 1;
  }
   console.log(myLove);
   
}
console.log(`The vowels is=${countVowels}`);

console.log("===================================================");

console.log("3.Count the a character including upper and lower character");
 const sentence="JavaScript LANGUAGE";
 let countCharacter=0;
 for( const char of sentence){
   if (char==`a`|| char==`A`) {
    countCharacter=countCharacter+1;
   }
   console.log(sentence);
 }
 console.log(`A character is:${countCharacter}`);
 