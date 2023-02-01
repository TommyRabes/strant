import { LitElement, TemplateResult } from "lit";
import './header';
import './footer';
export declare class LitDemo extends LitElement {
    protected renderHeader(): TemplateResult;
    protected renderFooter(): TemplateResult;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lit-demo': LitDemo;
    }
}
//# sourceMappingURL=lit-demo.d.ts.map