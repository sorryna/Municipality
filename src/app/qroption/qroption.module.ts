import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QROptionPageRoutingModule } from './qroption-routing.module';

import { QROptionPage } from './qroption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QROptionPageRoutingModule
  ],
  declarations: [QROptionPage]
})
export class QROptionPageModule {}
