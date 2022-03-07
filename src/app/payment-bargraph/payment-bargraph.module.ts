import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentBargraphPageRoutingModule } from './payment-bargraph-routing.module';

import { PaymentBargraphPage } from './payment-bargraph.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentBargraphPageRoutingModule,
    HeaderModule
  ],
  declarations: [PaymentBargraphPage]
})
export class PaymentBargraphPageModule {}
