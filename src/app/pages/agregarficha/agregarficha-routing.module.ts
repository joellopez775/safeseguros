import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarfichaPage } from './agregarficha.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarfichaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarfichaPageRoutingModule {}
