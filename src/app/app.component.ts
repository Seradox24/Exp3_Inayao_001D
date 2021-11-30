import { Component } from '@angular/core';
import { MenuController, Platform, ToastController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { initializeApp } from '@angular/fire/app';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  admin=false;

  constructor(
    private platform:Platform,
    private menuCtrl:MenuController,
    private AuthService:AuthService,
    private toastCtrl:ToastController) {this.initializeApp()}

  componentes: Componente [] = [
    {
      icon: 'compass-outline',
      name: 'Destinos',
      redirectTo: '/servicios'
    },
  ]


  initializeApp(){
    this.platform.ready().then(()=>{
      this.getUid();  
    })
  }

  cerrarMenu(){
    this.menuCtrl.close('first')
  }


  logOut(){
    this.AuthService.logOut();
    var msj=' Sesión cerrada Nos vemos';
    this.presentToast(msj);
    this.admin=false;

  }
  async presentToast(msj:string) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 2000
    });
    toast.present();
  }


  getUid(){
    this.AuthService.stateAuth().subscribe(res=>{
      if (res!==null){
        if(res.uid==='0yZSuDmcAaTokMu8hFBTfcj3W8c2'){
          this.admin=true;
        }else{
          this.admin=false;
        }
      }
    });
  }


}
