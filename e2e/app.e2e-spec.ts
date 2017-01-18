import { PonyracerPage } from './app.po';

describe('ponyracer App', function() {
  let page: PonyracerPage;

  beforeEach(() => {
    page = new PonyracerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Always a pleasure to bet on ponies');
  });
});
