export class Recipe {
    name: string;
    ingredients: string[];
    time: string;
    rating: string;
    image: string
    constructor(name: string, ingredients: string[], time: string, rating: string, image: string) {
        this.name = name;
        this.ingredients = ingredients;
        this.time = time;
        this.rating = rating;
        this.image = image;
    }
}
