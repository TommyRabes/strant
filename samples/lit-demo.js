var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import './header';
import './footer';
let LitDemo = class LitDemo extends LitElement {
    renderHeader() {
        return html `<strant-header></strant-header>`;
    }
    renderFooter() {
        return html `<strant-footer></strant-footer>`;
    }
    render() {
        return html `
        ${this.renderHeader()}
        <slot></slot>
        ${this.renderFooter()}
        `;
    }
};
LitDemo = __decorate([
    customElement('lit-demo')
], LitDemo);
export { LitDemo };
//# sourceMappingURL=lit-demo.js.map