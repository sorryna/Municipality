import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPdfPageRoutingModule } from './report-pdf-routing.module';

import { ReportPdfPage } from './report-pdf.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportPdfPageRoutingModule,
    HeaderModule
  ],
  declarations: [ReportPdfPage]
})
export class ReportPdfPageModule {}
