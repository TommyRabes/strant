import { Component, Host, h } from '@stencil/core';
import { Event, EventEmitter, Prop } from '@stencil/core/internal';
import { Item } from './item';

@Component({
  tag: 'strant-list-item',
  styleUrl: 'strant-list-item.css',
  shadow: true,
})
export class StrantListItem {

  @Prop() item: Item;

  @Event() itemSelected: EventEmitter<Item>;

  selectItem() {
    this.itemSelected.emit(this.item);
  }

  render() {
    return (
      <Host onClick={() => this.selectItem()}>
        <div class={{ selected: this.item.selected }}>{this.item.id}. {this.item.value} <span>Criticality : {this.item.criticality}</span></div>
      </Host>
    );
  }

}
