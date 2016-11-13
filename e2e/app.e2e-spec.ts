import {JanodempCPage} from "./app.po";

describe('janodemp-client App', function() {
  let page: JanodempCPage;

  beforeEach(() => {
    page = new JanodempCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
