const user = {
    name: "Tibi",
    sayHello: function() {
        //return "Hello, " + this.name;
        return `Hello, ${this.name}`;
    },
    sayHello2: () => {
        return "Hello, " + this.name;
    }
}

user.name = "Mihai";

user['name'] = "Mihai";

console.log(user.name);
console.log(user.sayHello());
console.log(user.sayHello2());


