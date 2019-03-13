namespace application {
    
	export class Application {

		constructor() {
			let theatre1 = new Theatre("KING David", 8, 20, 10000);
			theatre1.setOpeningHour(10);
			theatre1.setClosingHour(20);
			theatre1.printTheatrePropertiesToDOM();

			let theatre2 = new Theatre("Kuku show", undefined, 21);
			theatre2.printTheatrePropertiesToDOM(); 
		}
	}
}
