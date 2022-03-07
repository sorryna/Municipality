import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupPlanPageRoutingModule } from './setup-plan-routing.module';

import { SetupPlanPage } from './setup-plan.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetupPlanPageRoutingModule
  ],
  declarations: [
    SetupPlanPage,
    HeaderComponent
  ]
})
export class SetupPlanPageModule {}
