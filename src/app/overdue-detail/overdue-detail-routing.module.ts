import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverdueDetailPage } from './overdue-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OverdueDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverdueDetailPageRoutingModule {}
