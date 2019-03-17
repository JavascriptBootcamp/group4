var Theatre = /** @class */ (function () {
    function Theatre(name, openingHour, closingHour, totalNumber) {
        if (openingHour === void 0) { openingHour = 8; }
        if (closingHour === void 0) { closingHour = 18; }
        this.name = name;
        this.openingHour = openingHour;
        this.closingHour = closingHour;
        this.totalNumber = totalNumber;
    }
    // theatre:ITheatre
    // constructor(t:ITheatre) {
    //     console.log(t)
    //     for (const key in t) {
    //         if (t.hasOwnProperty(key)) {
    //             this.+key = t[key];
    //         }
    //     }
    //     this.theatre.name = t.name;
    //     this.theatre.openingHour = this.validOpeningHour(t.openingHour);
    //     this.theatre.openingHour = this.validOpeningHour(t.closingHour);
    //     // this.theatre.openingHour = t.openingHour? t.openingHour :8;
    //     // this.theatre.closingHour = t.closingHour?t.closingHour:18;
    //     this.theatre.totalNumber=t.totalNumber;
    // }
    Theatre.prototype.validOpeningHour = function (openingHour) {
        return (openingHour > 7 && openingHour < 13) ? openingHour : 8;
    };
    Theatre.prototype.validOClosingHour = function (closingHour) {
        return (closingHour > 17 && closingHour < 23) ? closingHour : 18;
    };
    Theatre.prototype.print = function () {
        var p = document.getElementById("print");
        console.log(p);
        p.innerHTML += "Theatre name: " + this.name + "<br>\n        Theatre closing hour: " + this.closingHour + "<br>\n        Theatre penin hour: " + this.openingHour + "<br>\n        totalNumber?: number; " + this.totalNumber + "<br><br>";
        // console.log(this.name);
        //   for (const key in this.theatre) {
        //       if (this.theatre.hasOwnProperty(key)) {
        //         // document.getElementById("print").innerHTML+=   this.theatre[key]
        //    console.log(this.theatre[key])   ;  
        //       }
        //   }
    };
    // public
    Theatre.prototype.howManyHours = function () {
        return (this.closingHour - this.openingHour);
    };
    return Theatre;
}());
var mytheatre1 = new Theatre("wedewd", 8, 6, 4);
mytheatre1.print();
var mytheatre2 = new Theatre("hello", 9, 26);
mytheatre2.print();
