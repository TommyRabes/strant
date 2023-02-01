import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Item } from "./item";

@customElement('strant-list-item')
export class StrantListItem extends LitElement {

    static override styles: CSSResultGroup = css`
        div:hover {
            background-color: rgba(48, 48, 48, 0.212);
        }

        div {
            display: flex;
            cursor: pointer;
            padding: 3px 5px 4px 5px;
            border-radius: 3px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            justify-content: space-between;
        }

        div.selected {
            color: rgb(79, 95, 236);
            background-color: rgba(80, 95, 231, 0.205);
        }

        div span {
            font-weight: bold;
        }
    `;

    @property()
    public item!: Item;

    private selectItem(): void {
        const selectEvent = new CustomEvent<Item>('itemSelected', { bubbles: true, composed: true, detail: this.item });
        this.dispatchEvent(selectEvent);
    }

    override connectedCallback(): void {
        super.connectedCallback();
        this.renderRoot.addEventListener('click', this.selectItem.bind(this));
    }

    override render(): TemplateResult {
        return html`
            <div @click=${this.selectItem} class=${this.item.selected ? 'selected' : ''}>${this.item.id}. ${this.item.value} <span>Criticality : ${this.item.criticality}</span></div>
        `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'strant-list-item': StrantListItem
    }
}
