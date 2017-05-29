import { UdemyTutorialPage } from './app.po';

describe('udemy-tutorial App', () => {
  let page: UdemyTutorialPage;

  beforeEach(() => {
    page = new UdemyTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
