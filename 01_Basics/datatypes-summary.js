// datatypes - summary.js;

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 878787878788454n

// const heros = ["shaktiman", "naagraj","doga"]
// let obj =
// {
//     name:"dev",
//     age:22,
// }

// const myFunction = function(){
//     console.log("Hello World")
// }

// console.log(typeof anotherId);

// let myYoutubename = "dev"

// let anotherName = myYoutubename
// anotherName = "danav"

// console.log(myYoutubename);
// console.log(anotherName);

// let userOne = {
//     email:devraval3939gmail.com,
//     Upi:"userybl"
// }

// let usertwo = userOne

// userTwo.email = "devgamil.com"

// console.log(userOne.gamil);
// console.log(userTwo.gamil);

// const name = "hitesh";
// const repoCount = 50;

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`devraval-vd-vidhi`);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("v"));

const newString = gameName.substring(0, 8);
console.log(newString);

const anotherString = gameName.slice(-8, -5);
console.log(anotherString);

const newStringOne = "    devRaval     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dev.com/dev%20raval";

console.log(url.replace("%20", "-"));

console.log(url.includes("dev"));

console.log(gameName.split("-"));
