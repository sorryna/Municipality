import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverdueDetailPageRoutingModule } from './overdue-detail-routing.module';

import { OverdueDetailPage } from './overdue-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverdueDetailPageRoutingModule
  ],
  declarations: [OverdueDetailPage]
})
export class OverdueDetailPageModule {}
