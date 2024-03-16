const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.map( (num) => num + 10 )

const newNums = myNums
.map((num)=> num * 10)
.map((num) => num + 1)
.filter( ( num) => num >= 40 )

console.log(newNums);




// sum of Array 

//  let sum = 0;
// for (let i = 0; i < myNums.length; i++) {
   
//     sum += myNums[i];
// }
// console.log(sum);

