export class User {

    constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public userName: string,
    public password: string,
    public phoneNumber: number,
    public email: string,
    public comments: string,
    public hobbies: string[],
    ) {}
}
