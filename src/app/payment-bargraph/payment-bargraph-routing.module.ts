import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentBargraphPage } from './payment-bargraph.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentBargraphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentBargraphPageRoutingModule {}
