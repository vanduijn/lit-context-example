import { ContextConsumer } from '@lit/context';
import { loggerContext } from './loggerContext.js';

export const LogConsumerMixin = (superclass) => class extends superclass {
    #consumer = null;

    static properties = {
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
        this.#consumer.disconnect();
        super.disconnectedCallback();
    }
}