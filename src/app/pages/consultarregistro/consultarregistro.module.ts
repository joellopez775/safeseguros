import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarRegistroPageRoutingModule } from './consultarregistro-routing.module';

import { ConsultarRegistroPage } from './consultarregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarRegistroPageRoutingModule
  ],
  declarations: [ConsultarRegistroPage]
})
export class ConsultarRegistroPageModule {}
