import { LitElement, html } from "lit";
import { LogConsumerMixin } from "./log-consumer-mixin.js";

export class MyLogConsumerWithMixin extends LogConsumerMixin(LitElement) {

    constructor() {
        super();
    }

    render() {
        return html`
            <h2>Consumer Mixin</h2>
            Last log message:${this.logger?.lastMessage}
            <hr>
            <input id="loginput" type="text">
            <button @click=${this.#onClick}>Add to log</button>
        `;
    }
    
    #onClick() {
        const val = this.shadowRoot.querySelector("#loginput").value;
        this.logger.log(val);
    }
}


customElements.define('my-log-consumer-with-mixin', MyLogConsumerWithMixin);
