var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
// console.log("inner:",a);
}

// console.log(a);
// console.log(b);

// console.log(c);

function one(){
    const username = "dev"

    function two(){
        const website ="youtube"
        console.log(username);

    }
    // console.log(website);

    two()
}
// one()

if (true){
    const username = "dev"
    if(username==="dev"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

function addone(num){
    return num+1
}

console.log(addone(5))

const addTwo = function(num){
    return num+ 2
}

addTwo(5)