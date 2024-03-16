const userEmail = "";

// if (userEmail) {
//     console.log("got user email");
// }else{
//     console.log("don't have user e-mail");
// }

// falsy values
// false, 0,-0,BigInt 0n," ",null,undefined,Nan

// truthy values
// "0", 'false', " ",[], {},function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

// const brand = [
//   { name:"dev", age: 17, gender: "male" },
//   { name:"jaimin", age: 21, gender: "male" },
//   { name:"anvit", age: 22, gender: "male" },
// ];

// const [user1,user2,user3,] = brand;
// // console.log(user2.name);
// // console.log(user3.age);
// console.log(`MY name is ${user2.name} and my age is ${user3.age}`);

let val1;
val1 = 5 ?? 10
console.log(val1);

//teranary operator 
// conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");