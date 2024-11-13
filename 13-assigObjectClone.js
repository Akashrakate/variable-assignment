
let bankSbi={
    name:`State Bank Of India`,
    branch:`Pune Main Branch`,
    accountNo:`152010300001111`,
    occupation:`Student`,
};
    bankLocation={
           street:`Wakad Road`,
           city:`Pune`,
           pin:`450436`
};
 
 console.log("==Clone the step 1 (bankSbi) and step 2(bank location) objects using====");
 console.log("===Step 1===");
 const clonedBankSbi=Object.assign({}, bankSbi);
 console.log(`Cloned BankSbi Object:`, clonedBankSbi);
console.log("===Step 2===");
const clonedBankLocation=Object.assign({}, bankLocation);
console.log(`Cloned Bank Location:`, clonedBankLocation);

console.log("===Create the objcet using objcet literals-rateOfinterest with Properties===");
const rateOfInterest={
    homeLoanInterest:5.5,
    personalLoanInterest:12.5,
    dueInterest:19.1
};
console.log(rateOfInterest);

console.log("===Merge the step 1,step 2,and step 4 objects into new object namely-sbiDetails===");
const sbiDetails=Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.log(`Merge SBI Details:`)
console.log(sbiDetails);

console.log("===Traverse this merged object -Step 5 using for in loop and log details properly===");
for (const key in sbiDetails) {
    console.log(`${key}:${sbiDetails[key]}`);
        
        

}





