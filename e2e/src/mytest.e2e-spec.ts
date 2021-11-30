import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('mi prueba',()=>{
    let page:AppPage;

    beforeEach(()=>{
        page= new AppPage();
        browser.get('/');
    });
    //prueba1
    it ("el tab 1 se muestra por defecto",()=>{
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("home");
    });

    // prueba2
    it('Mensaje de Bienvenida',()=>{
        page.navigateTo();
        expect (page.getParagraphText()).toContain('¿Qué estás buscando?');
    })
    // prueba3
    it('el usuario puede navegar a la pestaña perfil', ()=>{
        // await element(by.css("[home=perfil-bf]")).click();
        page.navigateTo();
        browser.driver.sleep(500);
        expect(element(by.css(".text21 ion-label")).getText()).toContain('Ingresa para desbloquear un montón de funciones');
        // expect(element(by.css(".tab-selected ion-label")).getText()).toContain('Ingresa para desbloquear un montón de funciones')
        // expect(page.getptext('app-root .text')).toContain('Ingresa para desbloquear un montón de funciones');
       
    });

    //prueba 4
    it('prueba boton login',()=>{
        page.navigateTo();
        element(by.buttonText('Ingresar')).click();
        expect (page.getParagraphText()).toContain('Login');
    })




    
});    