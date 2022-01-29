import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupPlanConfigPage } from './setup-plan-config.page';

const routes: Routes = [
  {
    path: '',
    component: SetupPlanConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupPlanConfigPageRoutingModule {}
