import { WidgetLivescorePage } from './app.po';

describe('widget-livescore App', () => {
  let page: WidgetLivescorePage;

  beforeEach(() => {
    page = new WidgetLivescorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
