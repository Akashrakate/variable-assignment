
function stringHandsOn(params) {
       var str ="    Hey you are doing good, keep it up    ";
        console.log(`1.Given string is ${str}`);
        console.log(`2.Length of the string is : ${str.length}`);
        var result=str.trim();
        console.log(`3.After trim string is: ${result} and its length ${result.length}`);
        console.log(`4.First char ${result.charAt (0)} and Last char ${result.charAt(result.length-1)}`);
        var resultValue=result.split(" ");
        console.log(`5.The count of total words: ${resultValue.length}`);
        console.log(`6.The index of word good: ${result.indexOf("good")}`);
        console.log(`7.The substring strating form index 22 :${result.substring(22)}`);
        console.log(`8.String ends with word up: ${result.endsWith("up")}`);
        console.log(`9.String starts with word hey:${result.startsWith("Hey")}`);
}
stringHandsOn();