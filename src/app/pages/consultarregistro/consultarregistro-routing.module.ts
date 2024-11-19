import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarregistroPage } from './consultarregistro.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarregistroPageRoutingModule {}
