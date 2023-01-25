import { Component, Host, h } from '@stencil/core';
import { State } from '@stencil/core/internal';
import { Item } from '../strant-list-item/item';

@Component({
  tag: 'strant-sorted-list',
  styleUrl: 'strant-sorted-list.css',
  shadow: true,
})
export class StrantSortedList {

  @State() time: number = Date.now();

  @State() items: Item[] = [];

  connectedCallback() {
    this.time = Date.now();
  }

  componentWillLoad() {
    this.items = [
      { id: '1', value: 'banana', criticality: 5 },
      { id: '2', value: 'strawberry', criticality: 4 },
      { id: '3', value: 'apple', criticality: 1 },
      { id: '4', value: 'mango', criticality: 2 },
      { id: '5', value: 'grape', criticality: 3 },
      { id: '6', value: 'pineapple', criticality: 4 }
    ];
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
