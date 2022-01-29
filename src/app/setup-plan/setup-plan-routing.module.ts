import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupPlanPage } from './setup-plan.page';

const routes: Routes = [
  {
    path: '',
    component: SetupPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupPlanPageRoutingModule {}
