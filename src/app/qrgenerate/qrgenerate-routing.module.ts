import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRGeneratePage } from './qrgenerate.page';

const routes: Routes = [
  {
    path: '',
    component: QRGeneratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRGeneratePageRoutingModule {}
