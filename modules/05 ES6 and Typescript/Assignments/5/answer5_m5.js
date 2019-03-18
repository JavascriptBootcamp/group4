var Thearte = /** @class */ (function () {
    function Thearte(name, openHour, closeHour, seats) {
        if (openHour === void 0) { openHour = 8; }
        if (closeHour === void 0) { closeHour = 18; }
        this.name = name;
        this.setOpen(openHour);
        this.setClose(closeHour);
    }
    Thearte.prototype.setOpen = function (openTime) {
        if (openTime < 8 || openTime > 12)
            this.openHour = 8;
        else
            this.openHour = openTime;
    };
    Thearte.prototype.setClose = function (closeTime) {
        if (closeTime < 18 || closeTime > 22)
            this.closeHour = 22;
        else
            this.closeHour = closeTime;
    };
    Thearte.prototype.calcOpenDuring = function () {
        return this.closeHour - this.openHour;
    };
    Thearte.prototype.printToDom = function () {
        document.body.innerHTML += "\n        <div>\n          <p>theatre's name :" + this.name + "</p>\n          <p>opening hour : " + this.openHour + "</p>\n          <p>closing hour :" + this.closeHour + "</p>\n       </div>\n        ";
    };
    return Thearte;
}());
var theatre1 = new Thearte("habima", 10, 23, 300);
console.log(theatre1.calcOpenDuring());
theatre1.printToDom();
var theatre2 = new Thearte("kameri", 7, 20);
console.log(theatre2.calcOpenDuring());
theatre2.printToDom();
