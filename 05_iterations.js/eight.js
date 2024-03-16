// const myNums = [1, 2, 3, 4, 5];

// // const myTotal = myNums.reduce(function(acc, currval) {
// // //     console.log(`acc: ${acc} and currval: ${currval}`);
// // //     return acc + currval
// // // }, 0)

// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js",
    price: 2999,
  },
  {
    itemName: "py",
    price: 9999,
  },
  {
    itemName: "mbd",
    price: 5999,
  },
  {
    itemName: "ds",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item)=> acc + item.price,0)
console.log(priceToPay);