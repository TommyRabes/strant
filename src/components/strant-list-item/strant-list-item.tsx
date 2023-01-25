import { Component, Host, h } from '@stencil/core';
import { Prop } from '@stencil/core/internal';
import { Item } from './item';

@Component({
  tag: 'strant-list-item',
  styleUrl: 'strant-list-item.css',
  shadow: true,
})
export class StrantListItem {

  @Prop() item: Item;

  render() {
    return (
      <Host>
        <span>{this.item.value}</span>
      </Host>
    );
  }

}
