import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentBargraphPageRoutingModule } from './payment-bargraph-routing.module';

import { PaymentBargraphPage } from './payment-bargraph.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentBargraphPageRoutingModule
  ],
  declarations: [
    PaymentBargraphPage,
    HeaderComponent
  ]
})
export class PaymentBargraphPageModule {}
