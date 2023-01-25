import { newSpecPage } from '@stencil/core/testing';
import { StrantSortedList } from '../strant-sorted-list';

describe('strant-sorted-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StrantSortedList],
      html: `<strant-sorted-list></strant-sorted-list>`,
    });
    expect(page.root).toEqualHtml(`
      <strant-sorted-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </strant-sorted-list>
    `);
  });
});
