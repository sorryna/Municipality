import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageDlgPage } from './manage-dlg.page';

const routes: Routes = [
  {
    path: '',
    component: ManageDlgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageDlgPageRoutingModule {}
