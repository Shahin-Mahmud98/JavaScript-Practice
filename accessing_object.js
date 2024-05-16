const user = {
    contact :{
        phone : 1786588096,
        email:'mdshahinmahmud412@gmail.com'
    },
    pet: {
        name :'Jhonny Islam',
        info:{
            color:'Black',
            weight: '12.3kg'
        }
    },
    familyMembers: [
        {
            name : 'q', age : 43
        },
        {
            name : 'w', age : 34
        },
    ]
}
// 1st way
// const email = user.contact.email;
// console.log(email);
 
// 2nd way
// const {contact :{email}} = user;
// console.log(email);

// 1st way
// Access pet color
// const petColor = user.pet.info.color;
// console.log(petColor);

 
// 2nd way
// const {pet :{info :{color}}} = user;
// console.log(color);


// 1st way
// access familymembers

// const member = user.familyMembers[0]
// console.log(member);

// 2nd way

// const {familyMembers:[memberOne,memberTwo]}=user;
// console.log(memberOne);

// Optional Chaining 
const petColor = user?.pet?.info?.color?.offer
console.log(petColor);