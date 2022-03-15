import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportPdfPage } from './report-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: ReportPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportPdfPageRoutingModule {}
