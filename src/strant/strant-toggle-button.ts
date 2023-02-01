import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('strant-toggle-button')
export class StrantToggleButton extends LitElement {
    static override styles: CSSResultGroup = css`
        :host {
            display: block;
            margin: 5px;
        }

        button {
            width: 100%;
            height: 100%;
            padding-top: 4px;
            padding-bottom: 4px;
        }

        button.selected {
            color: rgb(79, 95, 236);
            background-color: rgba(80, 95, 231, 0.205);
        }
    `;

    @property({ type: String, attribute: 'value' })
    public order!: string;

    @property({ type: String, attribute: 'text' })
    public label!: string;

    @property({ attribute: false })
    public active: boolean = false;

    private activate(): void {
        this.active = true;
        const activationEvent: CustomEvent<string> = new CustomEvent<string>('activation', { bubbles: true, composed: true, detail: this.order});
        this.dispatchEvent(activationEvent);
    }

    protected override render(): TemplateResult {
        return html`
            <button class=${ this.active ? 'selected' : '' } @click=${this.activate}>${this.label}</button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'strant-toggle-button': StrantToggleButton
    }
}
