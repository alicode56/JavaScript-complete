const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // for fixes  mrans decimal point ke bad ktne value

//##
const otherNumber = 123.3987;
console.log(otherNumber.toPrecision(3));

//##
const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // value ke indr commas lge hote hn

//#######

//+++++++++++++++++++++++++##++  maths   +++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6)); // round figure kre ga
console.log(Math.ceil(5.6)); // means jo next uper hoga whe dega
console.log(Math.floor(7.9)); // means lowest neche wala near value dega

///#######
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 10 + 1);


const min = 10;
const mix = 20;