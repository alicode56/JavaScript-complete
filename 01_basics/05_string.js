//string methods  #############

const name ="ali"
const repoCount = 5

//console.log (name + repoCount + "value")

//modern way of calls of this same is 

console.log (`my name is ${name} and repo count is ${repoCount}`)

//
const gameName = new String ("hitesh-c")

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())

//###
const newString = gameName.substring(0, 4)
console.log(newString)

//# slice method 
const anotherString = gameName.slice(-8,4)
console.log(anotherString)

//##
const newStringOne = "   hitesh   "  //space
console.log(newStringOne)
console.log(newStringOne.trim())

//# replace 
const url ="https://hitesh.com.hitesh20%choudary"
console.log(url.replace('20%','-'))
 
//#  include means dekhna h ye ye word h ya nhe nh us mn
console.log(url.includes("hitesh"))

//### 
console.log(gameName.split( '' ))