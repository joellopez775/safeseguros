import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoRutPageRoutingModule } from './resultado-rut-routing.module';

import { ResultadoRutPage } from './resultado-rut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoRutPageRoutingModule
  ],
  declarations: [ResultadoRutPage]
})
export class ResultadoRutPageModule {}
