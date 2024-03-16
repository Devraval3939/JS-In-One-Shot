// for loop

for (let index = 0; index <= 10; index++) {
  const element = index;
  // console.log(element);
}

for (let i = 0; i <= 10; i++) {
  let dev = i;
  if (dev == 5) {
    //    console.log("5 is best");
  }
  // console.log(dev);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value ${j}and inner loop ${i}`);
    // console.log(i + '*' + j + '=' + i*j);
  }
}

let myArray = ["flash", "Batman", "superman"];

// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

let mynum = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < mynum.length; i++) {
  sum += mynum[i];
}
// console.log(sum);

for (let i = 0; i <=20; i++) {
    if( i == 5){
        console.log('detected 5');
       break
    }
console.log(`value of i is ${i}`);
}
