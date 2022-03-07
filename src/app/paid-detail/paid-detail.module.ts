import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaidDetailPageRoutingModule } from './paid-detail-routing.module';

import { PaidDetailPage } from './paid-detail.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaidDetailPageRoutingModule
  ],
  declarations: [
    PaidDetailPage,
    HeaderComponent
  ]
})
export class PaidDetailPageModule {}
