import { Ng2SimpleStarterPage } from './app.po';

describe('ng2-simple-starter App', function() {
  let page: Ng2SimpleStarterPage;

  beforeEach(() => {
    page = new Ng2SimpleStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
