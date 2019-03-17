var DefaultMessenger = /** @class */ (function () {
    function DefaultMessenger(port) {
        this.port = 3000;
        this.port = port;
    }
    DefaultMessenger.prototype.print = function () {
        console.log(this.port);
    };
    return DefaultMessenger;
}());
export default DefaultMessenger;
export var str = "Hello";
