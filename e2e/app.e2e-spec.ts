import { IwaChallengePage } from './app.po';

describe('iwa-challenge App', function() {
  let page: IwaChallengePage;

  beforeEach(() => {
    page = new IwaChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
