import { LoggerInterface } from "./loggerInterface.js";

export class LoggerImpl extends LoggerInterface {
    #lastMessage = "";
    #provider = null;
    
    constructor(provider) {
        super();
        this.#provider = provider;
        this.log("Logger initialized!");
    }
    
    log(msg) {
        console.log(`[logger] ${msg}`);
        this.#lastMessage = msg;
        this.#updateProvider();
    }

    get lastMessage() {
        return this.#lastMessage;
    }

    #updateProvider() {
        this.#provider.setValue(this, true);
    }
}