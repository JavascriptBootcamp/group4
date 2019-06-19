class LogMessage {
    constructor() {
        this.id = null;
        this.author = null;
        this.message = null;
        this.date = null;
        this.chatIndex = null;
    }
    setLogMessage(id, author, message, date, chatIndex) {
        this.id = id;
        this.author = author;
        this.message = message;
        this.date = date;
        this.chatIndex = chatIndex;
    }
}
module.exports = LogMessage;