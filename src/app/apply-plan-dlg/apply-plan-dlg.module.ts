import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyPlanDlgPageRoutingModule } from './apply-plan-dlg-routing.module';

import { ApplyPlanDlgPage } from './apply-plan-dlg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ApplyPlanDlgPageRoutingModule
  ],
  declarations: [ApplyPlanDlgPage]
})
export class ApplyPlanDlgPageModule {}
