export class Registration {

    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public age: number,
      public userName: string,
      public password: string,
      public email: string,
      public phone: string,
      public comments?: string,
      public hobbies?: string[]
    ) { }
  }
  