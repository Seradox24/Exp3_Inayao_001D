import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalProductoPageRoutingModule } from './modal-producto-routing.module';
import { RouterModule } from '@angular/router';
import { ModalProductoPage } from './modal-producto.page';
import { ComponentsModule } from 'src/app/components/components.module';
// import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalProductoPageRoutingModule,
    ComponentsModule,
    RouterModule,
  
    
    // SharedDirectivesModule
  ],
  declarations: [ModalProductoPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ModalProductoPageModule {}
