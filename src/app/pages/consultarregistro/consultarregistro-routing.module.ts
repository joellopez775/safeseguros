import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarRegistroPage } from './consultarregistro.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarRegistroPageRoutingModule {}
