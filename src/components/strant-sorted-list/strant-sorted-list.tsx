import { Component, Host, h } from '@stencil/core';
import { Listen, Prop, State, Watch } from '@stencil/core/internal';
import { StrantListItemCustomEvent } from '../../components';
import { Item } from '../strant-list-item/item';

@Component({
  tag: 'strant-sorted-list',
  styleUrl: 'strant-sorted-list.css',
  shadow: true,
})
export class StrantSortedList {

  @Prop() orderProp?: 'id' | 'criticality' = 'id';

  @State() time: number = Date.now();

  @State() items: Item[] = [];

  connectedCallback() {
    this.time = Date.now();
  }

  componentWillLoad() {
    this.items = [
      { id: '1', value: 'banana', criticality: 5, selected: false },
      { id: '2', value: 'strawberry', criticality: 4, selected: false },
      { id: '3', value: 'apple', criticality: 1, selected: false },
      { id: '4', value: 'mango', criticality: 2, selected: false },
      { id: '5', value: 'grape', criticality: 3, selected: false },
      { id: '6', value: 'pineapple', criticality: 4, selected: false }
    ];
    this.sortItems();
  }

  componentWillUpdate() {
    console.log('Re-render scheduled in the next frame, v1');
  }

  @Listen('itemSelected')
  selectItem({ detail: itemToSelect }: StrantListItemCustomEvent<Item>) {
    // needs to update the reference of props in order for stencil to be able to detect changes
    // and thus, update the component
    this.items = this.items.map(item => {
      // use spread operator to create a new literal object so StrantListItem components will re-render
      return { ...item, selected: item === itemToSelect };
    });
  }

  @Watch('orderProp')
  sortItems() {
    this.items = [...this.items.sort((a, b) => +a[this.orderProp] - +b[this.orderProp])];
  }

  render() {
    const formatedTime = new Date(this.time).toLocaleTimeString();
    return (
      <Host>
        <h5>Component with title '<slot></slot>', initialized at {formatedTime}</h5>
        <br />
        {this.items.map(item => {
          return <strant-list-item item={item}></strant-list-item>;
        })}
      </Host>
    );
  }

}
