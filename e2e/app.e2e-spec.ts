import { FCPEIHMPage } from './app.po';

describe('fcpe-ihm App', function() {
  let page: FCPEIHMPage;

  beforeEach(() => {
    page = new FCPEIHMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
