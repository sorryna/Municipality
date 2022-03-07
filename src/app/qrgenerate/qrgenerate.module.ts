import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRGeneratePageRoutingModule } from './qrgenerate-routing.module';

import { QRGeneratePage } from './qrgenerate.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRGeneratePageRoutingModule
  ],
  declarations: [
    QRGeneratePage,
    HeaderComponent
  ]
})
export class QRGeneratePageModule {}
