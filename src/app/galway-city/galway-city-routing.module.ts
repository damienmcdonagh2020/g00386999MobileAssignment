import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalwayCityPage } from './galway-city.page';

const routes: Routes = [
  {
    path: '',
    component: GalwayCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalwayCityPageRoutingModule {}
