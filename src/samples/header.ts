import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('strant-header')
export class Header extends LitElement {

    override render() {
        return html`<header>Page header</header>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'strant-header': Header;
    }
}
