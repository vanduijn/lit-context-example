import { LitElement, html } from "lit";
import { LogConsumerMixin } from "./log-consumer-mixin.js";

export class MyLogConsumer extends LogConsumerMixin(LitElement) {

    render() {
        return html`
            <h2>Log Consumer - view only</h2>
            Last received log message: <code>${this.logger?.lastMessage}</code>
        `;
    }
}


customElements.define('my-log-consumer', MyLogConsumer);
