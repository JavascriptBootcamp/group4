interface ITheatre {
    setOpeningHour(openingHour: number): void;
    setClosingHour(closingHour: number): void;
    getOpeningHoursDuration(): number;
    getTotalSeats(): string;
    printTheatrePropertiesToDOM(): void;
}
