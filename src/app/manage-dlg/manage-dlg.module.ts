import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageDlgPageRoutingModule } from './manage-dlg-routing.module';

import { ManageDlgPage } from './manage-dlg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageDlgPageRoutingModule
  ],
  declarations: [ManageDlgPage]
})
export class ManageDlgPageModule {}
