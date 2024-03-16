
// function sayMyName() {
//     console.log("D");
//     console.log("e");
//     console.log("v");
//     console.log("R");
//     console.log("a");
//     console.log("v");
//     console.log("a");
//     console.log("l");
    
// }

// sayMyName()

function addTwoNum(number1, number2){
    // let result = number1 + number2
    // console.log("Hitesh");
    // return result
    return number1+number2
}

const result = addTwoNum( 3, 4 )
// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("dev"))

function calculateCaartPrice(...num1){
    return num1
}
// console.log(calculateCaartPrice(2,4,5))

const user = {
    username:"dev",
    Price: 199
}

function handleObject(anyobject){
    console.log(
      `username is ${anyobject.username} and price is ${anyobject.Price}`
    );
}
// handleObject(user);
handleObject({
    username: "sam",
    Price: 399
});

const myNewArray = [200,400,600,500,700]

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray));