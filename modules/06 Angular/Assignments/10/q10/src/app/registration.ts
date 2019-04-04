export class Registration {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public age: number,
        public userame: string,
        public password: string,
        public phone: number,
        public mail: string,
        public hobbies: string,
        public comments?: string
    
      ) {  }
}
