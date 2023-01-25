import { newE2EPage } from '@stencil/core/testing';

describe('strant-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<strant-list-item></strant-list-item>');

    const element = await page.find('strant-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
