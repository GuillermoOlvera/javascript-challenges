/*
    CHALLENGE #4
    
    Let's improve Steven's tip calculator even more, this time using loops!

    Your tasks:

    Create an array called bills containing all 10 test bill values.
    Create empty arrays for the tips and the totals (tips and totals)
    Use the calcTip function we wrote before (included in the starter code) 
    to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!


    TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (const bill of bills) {
    const tip = calcTip(bill);
    tips.push(tip);
    totals.push(tip + bill);
}

console.log(`Tips: ${tips}`);
console.log(`Total: ${totals}`);