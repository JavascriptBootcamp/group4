var Theatre = /** @class */ (function () {
    function Theatre(name, openingHr, closingHr, totalSeats) {
        if (openingHr === void 0) { openingHr = 8; }
        if (closingHr === void 0) { closingHr = 18; }
        this.name = name;
        this.openingHr = openingHr;
        this.closingHr = closingHr;
        this.totalSeats = totalSeats;
    }
    Theatre.prototype.getOpeningHr = function () { return this.openingHr; };
    Theatre.prototype.getClosingHr = function () { return this.closingHr; };
    Theatre.prototype.setOpeningHr = function (hr) {
        if (hr >= 8 && hr <= 12) {
            this.openingHr = hr;
        }
        else {
            console.log("Hour not in range");
        }
    };
    Theatre.prototype.setClosingHr = function (hr) {
        if (18 <= hr && hr <= 22) {
            this.openingHr = hr;
        }
        else {
            console.log("Hour not in range");
        }
    };
    Theatre.prototype.calcOpenTime = function () {
        return this.closingHr - this.openingHr;
    };
    Theatre.prototype.printToDom = function () {
        console.log(document.baseURI);
        console.log(document.bgColor);
        console.log(document.body);
        console.log(document.characterSet);
        console.log(document.charset);
        console.log(document.childElementCount);
        console.log(document.childNodes);
        console.log(document.children);
        console.log(document.compatMode);
        console.log(document.contentType);
        console.log(document.cookie);
    };
    return Theatre;
}());
var theatre1 = new Theatre("BamBam", 8, 19, 22);
theatre1.printToDom();
console.log(theatre1.calcOpenTime());
theatre1.setClosingHr(19);
theatre1.setOpeningHr(10);
console.log(theatre1.getClosingHr());
console.log(theatre1.getOpeningHr());
console.log(theatre1.name);
console.log(theatre1.totalSeats);
var theatre2 = new Theatre("TamTam", 8, 19);
theatre2.printToDom();
console.log(theatre1.calcOpenTime());
theatre2.setClosingHr(20);
theatre2.setOpeningHr(11);
console.log(theatre2.getClosingHr());
console.log(theatre2.getOpeningHr());
console.log(theatre2.name);
console.log(theatre2.totalSeats);
