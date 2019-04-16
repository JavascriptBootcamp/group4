export class Registration {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public userName: string,
        private password: string,
        public phone: number,
        public email: string,
        public comments: string,
        public hobby: string
    ) { }
}