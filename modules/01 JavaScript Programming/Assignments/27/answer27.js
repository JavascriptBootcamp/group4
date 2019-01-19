function validates(value) {
    this.value = value;
    this.type = "";
    if (typeof(this.value) === 'boolean') {
        this.type = 'boolean';
    }
    if (typeof(this.value) === 'number') {
        this.type = 'number';
    }
    if (typeof(this.value) === 'string') {
        this.type = 'string';
    }
    if (typeof(this.value) == null) {
        this.type = 'null';
    }
    if (typeof(this.value) == null) {
        this.type = 'null';
    }
    /*
    whether a given value type is boolean or not.
    whether a given value type is error or not.
    whether a given value type is NaN or not.
    whether a given value type is null or not.
    whether a given value is number or not.
    whether a given value is object or not.
    whether a given value type is pure json object or not.
    whether a given value is RegExp or not.
    whether a given value type is char or not.
    whether given value types are same or not.
    */
}

