var application;
(function (application) {
    class Application {
        constructor() {
            let theatre1 = new Theatre("KING David", 8, 20, 10000);
            theatre1.setOpeningHour(10);
            theatre1.setClosingHour(20);
            theatre1.printTheatrePropertiesToDOM();
            let theatre2 = new Theatre("Kuku show", undefined, 21);
            theatre2.printTheatrePropertiesToDOM();
        }
    }
    application.Application = Application;
})(application || (application = {}));
window.addEventListener('DOMContentLoaded', () => {
    new application.Application();
});
class Theatre {
    constructor(name, openingHour = 8, closingHour = 18, totalSeats) {
        this._name = name;
        this._openingHour = openingHour;
        this._closingHour = closingHour;
        this._totalSeats = totalSeats;
    }
    setOpeningHour(openingHour) {
        if (openingHour >= 8 && openingHour <= 12)
            this._openingHour = openingHour;
    }
    setClosingHour(closingHour) {
        if (closingHour >= 18 && closingHour <= 22) {
            this._closingHour = closingHour;
        }
    }
    getOpeningHours() {
        return this._closingHour - this._openingHour;
    }
    getTotalSeats() {
        if (this._totalSeats)
            return this._totalSeats.toString();
        else
            return "no information about total seats";
    }
    printTheatrePropertiesToDOM() {
        let theatrePropertiesElem = document.getElementById("theatre-properties");
        theatrePropertiesElem.innerText += `
        Theatre name: ${this._name}
        Opening hour : ${this._openingHour}
        Closing hour : ${this._closingHour}
        Opening hours cuantity: ${this.getOpeningHours()}
        Total seats: ${this.getTotalSeats()}
        `;
    }
}
