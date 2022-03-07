import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupPlanPageRoutingModule } from './setup-plan-routing.module';

import { SetupPlanPage } from './setup-plan.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetupPlanPageRoutingModule,
    HeaderModule
  ],
  declarations: [SetupPlanPage]
})
export class SetupPlanPageModule {}
