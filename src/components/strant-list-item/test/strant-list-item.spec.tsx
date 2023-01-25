import { newSpecPage } from '@stencil/core/testing';
import { StrantListItem } from '../strant-list-item';

describe('strant-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StrantListItem],
      html: `<strant-list-item></strant-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <strant-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </strant-list-item>
    `);
  });
});
