import { LitElement, html } from "lit";
import { LogConsumerMixin } from "./log-consumer-mixin.js";

export class MyLogConsumerEdit extends LogConsumerMixin(LitElement) {

    constructor() {
        super();
    }

    render() {
        return html`
            <h2>Log Consumer - edit</h2>
            Last received log message: <code>${this.logger?.lastMessage}</code>
            <p>
                <label>
                    New log message: 
                    <input id="loginput" type="text" .value=${this.logger?.lastMessage}>
                </label>
                <button @click=${this.#onClick}>Add to log</button>
            </p>
    `;
    }
    
    #onClick() {
        const val = this.shadowRoot.querySelector("#loginput").value;
        this.logger.log(val);
    }
}


customElements.define('my-log-consumer-edit', MyLogConsumerEdit);
