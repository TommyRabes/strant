import { newE2EPage } from '@stencil/core/testing';

describe('strant-toggle-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<strant-toggle-button></strant-toggle-button>');

    const element = await page.find('strant-toggle-button');
    expect(element).toHaveClass('hydrated');
  });
});
