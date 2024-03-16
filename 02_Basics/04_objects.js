// const tinderUser = new Objects()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "dev"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "dev@gmail.com",
    fullname : {
        userfullname: {
            firstname:"Dev",
            lastName:"Raval"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [{
    id:1,
    email: "h@gmail.com"
}]

// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.hasOwnProperty('isLoggedIn'));

// const course = {
//     courdename  : "js in hindi",
//     Price:"999",
//     courseInstructor:"Hitesh"
// }

// //course.courseInstructor

// const {courseInstructor:instructor} = course
// // console.log(courseInstructor);
// console.log(instructor);

// {
//     "name":"hindi"
//     "coursename" : "js in hindi"
//     "price" :"free"
// }