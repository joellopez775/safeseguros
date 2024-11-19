import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarfichaPageRoutingModule } from './agregarficha-routing.module';

import { AgregarfichaPage } from './agregarficha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarfichaPageRoutingModule
  ],
  declarations: [AgregarfichaPage]
})
export class AgregarfichaPageModule {}
