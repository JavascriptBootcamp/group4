"use strict";
exports.__esModule = true;
var Messenger = /** @class */ (function () {
    function Messenger(port) {
        this.port = 3000;
        this.port = port;
    }
    Messenger.prototype.print = function () {
        console.log(this.port);
    };
    return Messenger;
}());
exports.Messenger = Messenger;
