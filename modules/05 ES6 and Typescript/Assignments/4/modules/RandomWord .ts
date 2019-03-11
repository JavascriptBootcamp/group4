class IRandomWord{
    public c_arr:Array<string>
    constructorP(charsArray:Array<string>){
       this.c_arr = charsArray
    }
    public randomize(length:number):string{

        let text:string = ""; 
        const possible:string = this.c_arr.join("");
        for (let i:number = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}
    



