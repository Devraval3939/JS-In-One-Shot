const user = {
    username:"dev",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

