//+++++++++++++++date

let mydate = new Date();
// console.log(mydate.toString());
// console.log(typeof mydate);

// console.log(mydate.toISOString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());


//++++++++++specific date declare krne hn

//let myCreateddate = new Date(2023,0,23)
//console.log(myCreateddate.toDateString())

//let myCreateddate = new Date(23,1,23, 5,40)
let myCreateddate = new Date("2023-01-12")    //YY/DD/MM
//console.log(myCreateddate.toLocaleString())


//#////////////////+++++++++time+++++++
// let myTimeStamp = Date.now()
// console.log(myTimeStamp) 
// console.log(myCreateddate.getTime())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())