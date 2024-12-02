//####################notes#############
// # Primitive
//string     cll by value
//number
//bolean true false
//null     ek dm khale
// undefined      variable decleare  but value not assigned
// symbol     kse bhe value ko unique bnane ke lye symbl use hote h
//bigint         sintifc value  mrlb bht zuda  value     2*53
const bigNumber = 1212121111111111212212121212n;

const score = 100;
const scoreValue = 100.3;

const IsLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol("1123");
const anotherId = "22222";

// console.log (id === anotherId)

//#### NONPrimitive   or // refrence tyre
// Arrays
const heros = ["pirsb", "bhutto", "ali"];

//    Object

let myObj = {
  name: "ali",
  age: 18,
};

// functions   thre are trheee tyres
const myFunction = function () {
  console.log("helo");
};

// console.log(typeof myFunction)
//javascript is  dynamic language

// ++++++++++++++++++++++MEMORY+++++++++++++++++++++++++

// TWO types of memey  , stack or , heap
// pirmitive usese   ===stack
//is main jo bhe aap memory declare krte ho to aap ko is ka copy mlta h

let myyoutubename = "codeithalis";

let anothername = "programmer";
//console.log(myyoutubename);
//console.log(anothername);

// non pirmitive or refrce use ==== Heap,
// pimitive main use hota ========== stack
// is main orignal value mtlb refrence mlta h

let userOne = {
  email: "ali6@gmail.ocm",
  upi: "usee@ali",
};
let userTwo = userOne;
userTwo.email = "ali@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
