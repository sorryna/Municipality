import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRGeneratePageRoutingModule } from './qrgenerate-routing.module';

import { QRGeneratePage } from './qrgenerate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRGeneratePageRoutingModule
  ],
  declarations: [QRGeneratePage]
})
export class QRGeneratePageModule {}
