var Thearte = /** @class */ (function () {
    function Thearte(name, openHour, closeHour, seats) {
        if (openHour === void 0) { openHour = 8; }
        if (closeHour === void 0) { closeHour = 18; }
        this.name = name;
        this.openHour = openHour;
        this.closeHour = closeHour;
    }
    Thearte.prototype.calcOpenDuring = function () {
        return this.closeHour - this.openHour;
    };
    Thearte.prototype.printToDom = function () {
        document.body.innerHTML += "\n        <div>\n          <p>theatre's name : " + this.name + "</p>\n          <p>opening hour : " + this.openHour + "</p>\n          <p>closing hour :" + this.closeHour + "</p>\n       </div>\n        ";
    };
    return Thearte;
}());
var theatre1 = new Thearte("habima", 10, 21, 300);
console.log(theatre1.calcOpenDuring());
theatre1.printToDom();
var theatre2 = new Thearte("kameri", 9, 20, 500);
console.log(theatre2.calcOpenDuring());
theatre2.printToDom();
