import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyPlanDlgPageRoutingModule } from './apply-plan-dlg-routing.module';

import { ApplyPlanDlgPage } from './apply-plan-dlg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyPlanDlgPageRoutingModule
  ],
  declarations: [ApplyPlanDlgPage]
})
export class ApplyPlanDlgPageModule {}
