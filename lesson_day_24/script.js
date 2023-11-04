console.log("Lesson Day 24 -JS Functions, JS DOM keyboard")
// functions
// function тодорхойлох -  параметргүй 
function myFunction(){
    console.log("it is my function");
}
// myFunction call
myFunction()

// function - 1 параметртай утга буцаадаг
// addTwo - 5->7

function addTwo(a){
      return a+2
}
console.log(addTwo(5))

//function expression 
const myFunctionTwo = function(){
      console.log('it is my function expression')
}
myFunctionTwo()
let a =6
const myArrowFun = ()=>{
    console.log('it is my arrow function')
}
myArrowFun()