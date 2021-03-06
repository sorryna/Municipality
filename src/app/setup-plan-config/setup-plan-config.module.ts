import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupPlanConfigPageRoutingModule } from './setup-plan-config-routing.module';

import { SetupPlanConfigPage } from './setup-plan-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SetupPlanConfigPageRoutingModule
  ],
  declarations: [SetupPlanConfigPage]
})
export class SetupPlanConfigPageModule {}
