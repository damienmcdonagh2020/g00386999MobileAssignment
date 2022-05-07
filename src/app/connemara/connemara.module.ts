import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnemaraPageRoutingModule } from './connemara-routing.module';

import { ConnemaraPage } from './connemara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnemaraPageRoutingModule
  ],
  declarations: [ConnemaraPage]
})
export class ConnemaraPageModule {}
