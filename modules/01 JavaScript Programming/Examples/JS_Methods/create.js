הפונקציה מייצרת אובייקט מהסוג של הפרמטר המועבר, ללא הרצת קוד הבנאי.
בדוגמא יש שימוש בפונקציה, כולל ההבדל בינה לבין הפונקציה new
function Dog(){
    this.pupper = 'Pupper';
};

Dog.prototype.pupperino = 'Pups.';
var maddie = new Dog();
var buddy = Object.create(Dog.prototype);

//Using New Keyword
console.log(maddie.pupper); //Output is Pupper
console.log(maddie.pupperino); //Output is Pups.

//Using Object.create()
console.log(buddy.pupper); //Output is undefined
console.log(buddy.pupperino); //Output is Pups.
