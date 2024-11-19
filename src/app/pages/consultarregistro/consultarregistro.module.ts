import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarregistroPageRoutingModule } from './consultarregistro-routing.module';

import { ConsultarregistroPage } from './consultarregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarregistroPageRoutingModule
  ],
  declarations: [ConsultarregistroPage]
})
export class ConsultarregistroPageModule {}
