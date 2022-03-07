import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QROptionPageRoutingModule } from './qroption-routing.module';

import { QROptionPage } from './qroption.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QROptionPageRoutingModule,
    HeaderModule
  ],
  declarations: [QROptionPage]
})
export class QROptionPageModule { }
