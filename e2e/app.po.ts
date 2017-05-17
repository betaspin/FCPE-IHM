import { browser, element, by } from 'protractor';

export class FCPEIHMPage {
  navigateTo() {
    return browser.get('/test');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
