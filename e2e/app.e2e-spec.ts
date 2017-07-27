import { UFXGoogleMapPage } from './app.po';

describe('ufxgoogle-map App', () => {
  let page: UFXGoogleMapPage;

  beforeEach(() => {
    page = new UFXGoogleMapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
