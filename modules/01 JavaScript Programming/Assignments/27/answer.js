function Validator(value){
    this.isBoolean = () =>{
        try{
            if(typeof value !== 'boolean'){
                throw "Not a boolean!";
            }
            console.log("It's a boolean");
            return true;
        }catch (ex){
            console.log(value, ex);
            return false;
        }
    }

    this.isError = () =>{
        try{
            if(!(value instanceof Error)){
                throw "Not an error!";
            }
            console.log("It's an error");
            return true;
        }catch (ex){
            console.log(value, ex);
            return false;
        }
    }

    this.isNaN = () =>{
        try{
            if(!isNaN(value)){
                throw "Not a NaN!";
            }
            console.log("It's a NaN");
            return true;
        }catch (ex){
            console.log(value, ex);
            return false;
        }
    }

    this.isNull = () =>{
        try{
            if(value !== null){
                throw "Not a null!";
            }
            console.log("It's a null");
            return true;
        }catch (ex){
            console.log(value, ex);
            return false;
        }
    }

    this.isNum = () =>{
        try{
            if(isNaN(value)){
                throw "Not a number!";
            }
            console.log("It's a number");
            return true;
        }catch (ex){
            console.log(value, ex);
            return false;
        }
    }

    this.isObject = () =>{
        try{
            if(!(value instanceof Object)){
                throw "Not an Object!";
            }
            console.log("It's an Object");
            return true;
        }catch (ex){
            console.log(value, ex);
            return false;
        }
    }

    this.isJson = () =>{
        try{
            JSON.parse(value);
            console.log("It's an JSON");
            return true;
        }catch (ex){
            ex = "Not a JSON!"
            console.log(value, ex);
            return false;
        }
    }

    this.isRegExp = () =>{
        try{
            if(!(value instanceof RegExp)){
                throw "Not a RegExp!";
            }
            console.log("It's a RegExp");
            return true;
        }catch (ex){
            console.log(value, ex);
            return false;
        }
    }

    this.isChar = () =>{
        try{
            if(!(typeof value === 'string') || value.length !== 1){
                throw "Not a char!";
            }
            console.log("It's a char");
            return true;
        }catch (ex){
            console.log(value, ex);
            return false;
        }
    }

    this.isSame = (value2) =>{
        try{
            if(typeof value !== typeof value2){
                throw "Not the same type!";
            }
            if(value instanceof Object){
                if(value.constructor.name !== value2.constructor.name){
                    throw "Not the same type!";
                }
            }
            console.log("They've the same type");
            return true;
        }catch (ex){
            console.log(value, 'and', value2, ex);
            return false;
        }
    }
}
var check;
//boolean
var validator = new Validator(true);

check = validator.isBoolean();
console.log(check);

validator = new Validator('2');

check = validator.isBoolean();
console.log(check);
console.log();

//Error
validator = new Validator(new Error());

check = validator.isError();
console.log(check);

validator = new Validator(true);

check = validator.isError();
console.log(check);
console.log();

//NaN
validator = new Validator('hi');

check = validator.isNaN();
console.log(check);

validator = new Validator(23);

check = validator.isNaN();
console.log(check);
console.log();

//null
validator = new Validator(null);

check = validator.isNull();
console.log(check);

validator = new Validator(231);

check = validator.isNull();
console.log(check);
console.log();

//isNum
validator = new Validator(21);

check = validator.isNum();
console.log(check);

validator = new Validator('wq');

check = validator.isNum();
console.log(check);
console.log();

//isObject
validator = new Validator({});

check = validator.isObject();
console.log(check);

validator = new Validator('hi my name is.');

check = validator.isObject();
console.log(check);
console.log();

//isJson
validator = new Validator('{"result":true, "count":42}');

check = validator.isJson();
console.log(check);

validator = new Validator('{"result":true, count:42}');

check = validator.isJson();
console.log(check);
console.log();

//isRegExp
validator = new Validator(/abc*d/);

check = validator.isRegExp();
console.log(check);

validator = new Validator('/abc/d');

check = validator.isRegExp();
console.log(check);
console.log();

//isChar
validator = new Validator('d');

check = validator.isChar();
console.log(check);

validator = new Validator('da');

check = validator.isChar();
console.log(check);
console.log();

//isSame
validator = new Validator('d');

check = validator.isSame('dav');
console.log(check);

validator = new Validator({});

check = validator.isSame([]);
console.log(check);
console.log();
