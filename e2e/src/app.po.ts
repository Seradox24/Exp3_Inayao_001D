import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }
  navigateTot2(){
    return browser.get(browser.baseUrl+'/tab-inicial/perfil-bf');
  }

  getPageTitle() {
    return element(by.css('app-root h1')).getText();
  }
  getParagraphText(){
    return element(by.deepCss('app-root ion-content')).getText();
  }
  getptext(s:string){
    return element(by.css(s)).getText();
  }
}
