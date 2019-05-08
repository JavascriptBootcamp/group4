export class Product {
    name: string;
    priceOfOneProduct: number;
    src: string;
    amount: number;
    isInCart: boolean;
    totalPrice: number;
    constructor(name,price,src){
        this.name=name;
        this.priceOfOneProduct=price;
        this.src=src;
        this.amount=0;
        this.isInCart = false;
        this.totalPrice=0;
    }
}
