import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QROptionPageRoutingModule } from './qroption-routing.module';

import { QROptionPage } from './qroption.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QROptionPageRoutingModule
  ],
  declarations: [
    QROptionPage,
    HeaderComponent
  ]
})
export class QROptionPageModule { }
