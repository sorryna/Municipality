import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentBargraphPageRoutingModule } from './payment-bargraph-routing.module';

import { PaymentBargraphPage } from './payment-bargraph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentBargraphPageRoutingModule
  ],
  declarations: [PaymentBargraphPage]
})
export class PaymentBargraphPageModule {}
