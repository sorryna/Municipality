import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRGeneratePageRoutingModule } from './qrgenerate-routing.module';

import { QRGeneratePage } from './qrgenerate.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRGeneratePageRoutingModule,
    HeaderModule
  ],
  declarations: [QRGeneratePage]
})
export class QRGeneratePageModule {}
