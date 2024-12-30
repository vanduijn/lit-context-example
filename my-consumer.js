import { LitElement, html } from "lit";
import { ContextConsumer } from "@lit/context";
import { loggerContext } from "./loggerContext.js";

export class MyConsumer extends LitElement {

    #consumer = null;

    properties = {
        logger: { type: Object, state: true }
    };

    constructor() {
        super();
        this.#consumer = null
        this.logger = null;
    }
    
    connectedCallback() {
        super.connectedCallback();
        this.#consumer = new ContextConsumer(this, {
            context: loggerContext,
            callback: (value) => { 
                console.log("Consumer callback", value);
                this.logger =  value;
                this.requestUpdate();
            },
            subscribe: true
        }); 
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.#consumer.disconnect();
    }

    render() {
        return html`
            <h2>Consumer</h2>
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


customElements.define('my-consumer', MyConsumer);
