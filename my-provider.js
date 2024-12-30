import {LitElement, html} from 'lit';
import {ContextProvider} from '@lit/context';
import {loggerContext} from './loggerContext.js';
import {LoggerImpl} from './logger.js';
import { loggerEventName } from './loggerEvent.js';




export class MyProvider extends LitElement {

    // create a provider controller and a default logger
    provider = new ContextProvider(this, {context: loggerContext}); 

    properties = {
        logger: {type: Object, state: true}
    };
   
    constructor() {
        super();
        
        this.addEventListener(loggerEventName, (e) => {
            this.logger.log(e.detail);
            this.provider.setValue(this.logger, true);
            this.requestUpdate();
        });
        
        this.logger = new LoggerImpl();
        this.provider.setValue(this.logger, true);
    }
  
    render() {
        return html`<h2>Provider</h2>
        Last log message: ${this.logger.lastMessage}<br>
        <slot></slot>`;
    }


}

customElements.define('my-provider', MyProvider);