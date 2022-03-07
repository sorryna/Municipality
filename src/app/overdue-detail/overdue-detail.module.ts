import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverdueDetailPageRoutingModule } from './overdue-detail-routing.module';

import { OverdueDetailPage } from './overdue-detail.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverdueDetailPageRoutingModule,
    HeaderModule
  ],
  declarations: [OverdueDetailPage]
})
export class OverdueDetailPageModule {}
