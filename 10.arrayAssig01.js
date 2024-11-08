

 let fruitsList= [ 'Banana','Orange','Apple','Mango','Water Melons' ];
 console.log(fruitsList);
 console.log("1.Frist & Last element on console");

 console.log(" a.Frist Element");
let fristElement = fruitsList[0];
console.log(fristElement);

console.log(" b.List Element");
let arrayLength = fruitsList.length;
const lastElement =  fruitsList[arrayLength-1];
console.log(lastElement)

console.log("2.Add elament'Papaya'before the element'Banana'then console");
let fruits= [ 'Banana','Orange','Apple','Mango','Water Melons' ];
fruits.unshift("Papaya");
console.log(fruits);

console.log("3.Remove'Mango'from array");
fruits.splice(4,1)
console.log(fruits);

console.log("4.Add element or insert an element'Pineapple'at the last position");
fruitsList.push("Pineapple")
console.log(fruitsList);

console.log("5.Insert an element 'Dragon fruit'before 'Water Malon'");
const indexOfWaterMalon= fruits.indexOf("Water Malon");
fruits.splice(indexOfWaterMalon,0,"Dragon fruit");
console.log(fruits);

console.log("6.Replace an elements 'Orange'with 'kiwi'");
const indexOfOrange=fruits.indexOf("Orange");
fruits[indexOfOrange]="Kiwi"
console.log(fruits);

console.log("7.The elements starting from index 1 to 4");
console.log(fruits.slice(1,5));

console.log("8.Only select last 3 element and log an console:use the length property");
console.log(fruits.slice(fruits.length-3));


