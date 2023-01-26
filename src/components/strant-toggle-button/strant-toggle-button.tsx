import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'strant-toggle-button',
  styleUrl: 'strant-toggle-button.css',
  shadow: true,
})
export class StrantToggleButton {

  @Prop() text!: string;

  @Prop() value!: any;

  @Prop({ mutable: true }) active: boolean = false;

  @Event() activation: EventEmitter<any>;

  activate() {
    this.active = true;
    this.activation.emit(this.value);
  }

  render() {
    return (
      <Host>
        <button class={{ selected: this.active }} onClick={() => this.activate() }>{this.text}</button>
      </Host>
    );
  }

}
