import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('strant-footer')
export class Footer extends LitElement {

    override render() {
        return html`<footer>Footer content</footer>`
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'strant-footer': Footer;
    }
}
