import { newE2EPage } from '@stencil/core/testing';

describe('strant-sorted-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<strant-sorted-list></strant-sorted-list>');

    const element = await page.find('strant-sorted-list');
    expect(element).toHaveClass('hydrated');
  });
});
