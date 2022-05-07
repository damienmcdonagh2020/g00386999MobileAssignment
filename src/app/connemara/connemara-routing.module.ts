import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnemaraPage } from './connemara.page';

const routes: Routes = [
  {
    path: '',
    component: ConnemaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnemaraPageRoutingModule {}
