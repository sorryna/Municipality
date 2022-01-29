import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyPlanDlgPage } from './apply-plan-dlg.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyPlanDlgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyPlanDlgPageRoutingModule {}
