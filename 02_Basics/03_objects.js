// object literals

const JsUser = {
    name: "dev",
    FullName:"devraval",
    age:"20",
    // [mysym]:"mykey1",
    location:"amd",
    email:"devraval@gamil.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.age)
// console.log(JsUser.mysym)
console.log(JsUser[("age", "FullName")]);

// const mysym = symbol("Key1")

JsUser.email = "vidhi@dev.com"
// Object.freeze(JsUser)
JsUser.email = "devvidhi@.com";
console.table(JsUser);

JsUser.greetings = function(){
    console.log(`Hello JsUser, ${this.name}`);
}
console.log(JsUser.greetings());
