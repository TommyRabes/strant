import { newSpecPage } from '@stencil/core/testing';
import { StrantToggleButton } from '../strant-toggle-button';

describe('strant-toggle-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StrantToggleButton],
      html: `<strant-toggle-button></strant-toggle-button>`,
    });
    expect(page.root).toEqualHtml(`
      <strant-toggle-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </strant-toggle-button>
    `);
  });
});
