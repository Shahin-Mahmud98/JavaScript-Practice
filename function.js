// access before declaring function


// const result = add(4,5)
// console.log(result);

// function add(num1,num2){
//     return num1+num2;

// }

// multiply(4,5)
// const multiply = (num1,num2) =>{
//     return num1 + num2;
// }


// Javascript Function Argument

// function result (name){
//     console.log(`'Hello' ,${name}`);

// }

// // argument
// result('Md Shahin Mahmud')
// console.log(result);


// Functions as Variable Values:

// Function to convert Fahrenheit to Celsius
function toCelcious (fahrenheIt){
    return(fahrenheIt -32) * 5/9;

}
  // Using the function to convert temperature
const temperatureInFarhenIt = 77;
const temperatureInCelcious = toCelcious(temperatureInFarhenIt);
const text = "The tempture is :" + temperatureInFarhenIt + " Celsious";

console.log(text);