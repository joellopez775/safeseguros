import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoRutPage } from './resultado-rut.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoRutPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoRutPageRoutingModule {}
