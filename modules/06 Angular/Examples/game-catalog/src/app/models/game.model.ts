interface IGame {
    name: string;
    dateRelease: Date;
    imageUrl?: string;
}

export class Game implements IGame {
    name: string;
    dateRelease: Date;
    imageUrl?: string;

    constructor(name?: string, dateRelease?: string, imageUrl?: string) {
        this.name = name;
        this.dateRelease = new Date(dateRelease);
        this.imageUrl = imageUrl;
    }
}