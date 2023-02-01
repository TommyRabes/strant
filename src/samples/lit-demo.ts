import { html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import './header';
import './footer';

@customElement('lit-demo')
export class LitDemo extends LitElement {

    protected renderHeader(): TemplateResult {
        return html`<strant-header></strant-header>`;
    }

    protected renderFooter(): TemplateResult {
        return html`<strant-footer></strant-footer>`;
    }

    override render() {
        return html`
        ${this.renderHeader()}
        <slot></slot>
        ${this.renderFooter()}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'lit-demo': LitDemo;
    }
}
