import { html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Item } from "./item";
import "./strant-list-item";

@customElement('strant-sorted-list')
export class StrantSortedList extends LitElement {

    private _order: 'id' | 'criticality' = 'id';

    public set orderProp(order: string) {
        if (!['id', 'criticality'].includes(order)) return;
        const newValue = order as 'id' | 'criticality';
        const oldValue = this._order;
        this._order = newValue;
        this.requestUpdate('orderProp', oldValue);
    }

    @property({ attribute: false })
    public get orderProp(): 'id' | 'criticality' {
        return this._order;
    }

    @state()
    private time: number = Date.now();

    @state()
    private items: Item[] = [];

    private selectItem(e: CustomEvent<Item>) {
        this.items = this.items.map(item => {
            item.selected = item.id === e.detail.id;
            return { ...item };
        });
    }

    override connectedCallback(): void {
        super.connectedCallback();
        this.time = Date.now();
        this.items = [
            { id: '1', value: 'banana', criticality: 5, selected: false },
            { id: '2', value: 'strawberry', criticality: 4, selected: false },
            { id: '3', value: 'apple', criticality: 1, selected: false },
            { id: '4', value: 'mango', criticality: 2, selected: false },
            { id: '5', value: 'grape', criticality: 3, selected: false },
            { id: '6', value: 'pineapple', criticality: 4, selected: false }
        ];
    }

    protected override willUpdate(changedProperties: Map<PropertyKey, any>): void {
        if (changedProperties.has('orderProp')) {
            this.sortItems();
        }
    }

    private sortItems(): void {
        this.items = [...this.items].sort((a, b) => +a[this.orderProp] - +b[this.orderProp]);
    }

    renderItems(): TemplateResult[] {
        return this.items.map(item => html`
            <strant-list-item @itemSelected=${this.selectItem} .item=${item}></strant-list-item>
        `);
    }

    override render(): TemplateResult {
        const formattedDate: string = new Date(this.time).toLocaleTimeString();
        return html`
            <p>Hello world, component initialized at ${formattedDate}</p>
            <br/>
            <div>
                ${this.renderItems()}
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'strant-sorted-list': StrantSortedList;
    }
}
