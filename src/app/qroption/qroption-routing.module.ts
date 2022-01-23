import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QROptionPage } from './qroption.page';

const routes: Routes = [
  {
    path: '',
    component: QROptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QROptionPageRoutingModule {}
