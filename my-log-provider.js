import {LitElement, html} from 'lit';
import {ContextProvider} from '@lit/context';
import {loggerContext} from './loggerContext.js';
import {LoggerImpl} from './logger.js';



export class MyLogProvider extends LitElement {

    // create a context provider controller
    provider = new ContextProvider(this, {context: loggerContext}); 

    properties = {
        logger: {type: Object, state: true}
    };
   
    constructor() {
        super();
        this.logger = new LoggerImpl(this.provider);
    }
  
    render() {
        return html`<h2>Provider</h2>
        Last log message: ${this.logger.lastMessage}<br>
        <slot></slot>`;
    }


}

customElements.define('my-log-provider', MyLogProvider);