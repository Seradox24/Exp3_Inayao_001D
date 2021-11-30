import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.page.html',
  styleUrls: ['./modal-producto.page.scss'],
})
export class ModalProductoPage implements OnInit {

  

  @Input() nombre:string
  @Input() region:string
  @Input() precio:number
  @Input() tiempo:string
  @Input() personas:string
  @Input() slot:string
  @Input() resumen:string
  @Input() itinerario:string
  @Input() latitud:number
  @Input() longitud:number
  @Input() foto:string
  
  
  
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

  boton(){
    console.log(this.nombre,this.region)
  }

}
