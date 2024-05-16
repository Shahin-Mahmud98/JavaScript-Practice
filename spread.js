// Spread Operator

// const nums = [1,2,3,4,5]
// const num2 = nums; //reference

// num2.push(6);
// console.log(nums);
// console.log(num2);

// Spread array destructured

const nums = [1,2,3,4,5]

// const num1 = nums[0];
// const num2 = nums[1];
// const num3 = nums[2];
// const num4 = nums[3];
// const num5 = nums[4];

// console.log("number1:",num1);
// console.log("number2:",num2);
// console.log("number3:",num3);
// console.log("number4:",num4);
// console.log("number5:",num5);

// Rest Operator
// const [num1,num2,...others] = nums
// console.log(num1,num2,others);

// how to object destructured 
const person1 ={
    name :'md shahin mahmud',
    age : 27,
    address :'Uttara,Dhaka',
    isMarried : false,
    dob:'11',
    nationality:'Bangladeshi'
}

// const person2 = {...person1};

// person2.isMarried = true;
// console.log(person1,person2);


// const name = person1.name;
// const age = person1.age;
// const address = person1.address;

// console.log(name,age,address);

// 2nd method
// const {name ,age , address} = person1;
// console.log(name,age,address);

// 3rd method

const {name, ...userData} = person1;
console.log(name,userData);