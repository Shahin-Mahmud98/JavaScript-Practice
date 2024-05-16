const numbers = [1,2,3,4,5,5];

const numbers1 = numbers.forEach((item)=>(item))
// console.log("numbers1:", numbers1);


// map
const numbers2 = numbers.map((item)=>(item + 1))
// console.log("numbers2:",numbers2);


// find method
// const foundValue = numbers.find((item)=> item ==2)
// // console.log(foundValue);
// const foundValues = numbers.find((item)=> item ==7)
// console.log(foundValues);

// filter method
const filterArray = numbers.filter((item)=> item <4)
// console.log("FilterArray :" ,filterArray);

const sum = numbers.reduce((preValue,currentValue)=> preValue + currentValue)
console.log(sum);