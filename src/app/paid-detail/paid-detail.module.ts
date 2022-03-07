import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaidDetailPageRoutingModule } from './paid-detail-routing.module';

import { PaidDetailPage } from './paid-detail.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaidDetailPageRoutingModule,
    HeaderModule
  ],
  declarations: [PaidDetailPage]
})
export class PaidDetailPageModule {}
