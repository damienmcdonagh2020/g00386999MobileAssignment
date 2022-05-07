import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalwayCityPageRoutingModule } from './galway-city-routing.module';

import { GalwayCityPage } from './galway-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalwayCityPageRoutingModule
  ],
  declarations: [GalwayCityPage]
})
export class GalwayCityPageModule {}
