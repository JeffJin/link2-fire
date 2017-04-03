import { Link2FirePage } from './app.po';

describe('link2-fire App', () => {
  let page: Link2FirePage;

  beforeEach(() => {
    page = new Link2FirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
