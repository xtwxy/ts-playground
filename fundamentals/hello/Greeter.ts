class Greeter {
    greeting: String;

    constructor(message: String) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting + "!";
    }

    message(message: String) {
        this.greeting = message;
    }    
}

var greeter: Greeter = new Greeter("world");
console.log(greeter.greet());
greeter.message("bastard");
console.log(greeter.greet());

