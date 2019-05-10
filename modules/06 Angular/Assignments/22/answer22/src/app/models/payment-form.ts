export class PaymentForm {
    constructor(
        public cardNumber: string,
        public cardOwnerName: string,
        public exparationDate: string,
        public CVV: number
    ){}
}
