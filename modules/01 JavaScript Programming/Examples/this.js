// console.log(this);

// var david = {
//     shirtColor: "red",
//     printShirtColor: function(message, marks){
//         // console.log(this.shirtColor + message + marks);
//         return this.shirtColor + message + marks;
//     },
// };

// var gaby = {
//     shirtColor: "blue"
// }

// david.printShirtColor.call(gaby, " is my shirt color", "!!!");
// david.printShirtColor.apply(gaby, [" is my shirt color", "!!!"]);
// var text = david.printShirtColor.bind(gaby, " is my shirt color");
// console.log(text("!!!"));
// console.log(text("..."));

function Dog(name, size, kind, gender, _age){
    this.name = name;
    this.size = size;
    this.kind = kind;
    this.gender = gender;
    this.age = _age;

    this.getNickName = function(){
        // this.nickname = this.age <= 3 ? "Baby" : "Old";
        var nickname = _age <= 3 ? "Baby" : "Old";
        console.log("age", _age);
        return nickname + " " + this.name;
    }

    console.log("nickname", nickname);
}

var matansDog = new Dog("Kuma", "small", "pom", "female", 0.5); // "matansDog" - instance. "Dog" - constructor
var avisDog = new Dog("Snoop", "small", "chiwawah", "male", 4);

// console.log("Matan's Dog name is " + matansDog.name);
// console.log("Avi's Dog name is " + avisDog.name);

console.log("Matan's Dog nick name is: " + matansDog.getNickName());
console.log(matansDog.nickname);

// x = 2;
// console.log(this.x);