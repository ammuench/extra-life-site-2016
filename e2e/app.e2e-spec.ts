import { ELNG2AppPage } from './app.po';

describe('el-ng2-app App', function() {
  let page: ELNG2AppPage;

  beforeEach(() => {
    page = new ELNG2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
