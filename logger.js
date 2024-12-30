import { LoggerInterface } from "./loggerInterface.js";

export class LoggerImpl extends LoggerInterface {
    #lastMessage = "";
    
    constructor() {
        super();
        this.log("Logger initialized!");
    }
    
    log(msg) {
        console.log(`[logger] ${msg}`);
        this.#lastMessage = msg;
    }

    get lastMessage() {
        return this.#lastMessage;
    }
}


