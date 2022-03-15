import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'paid-detail',
    loadChildren: () => import('./paid-detail/paid-detail.module').then( m => m.PaidDetailPageModule)
  },
  {
    path: 'overdue-detail',
    loadChildren: () => import('./overdue-detail/overdue-detail.module').then( m => m.OverdueDetailPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QRPageModule)
  },
  {
    path: 'manage',
    loadChildren: () => import('./manage/manage.module').then( m => m.ManagePageModule)
  },
  {
    path: 'qroption',
    loadChildren: () => import('./qroption/qroption.module').then( m => m.QROptionPageModule)
  },
  {
    path: 'qrgenerate',
    loadChildren: () => import('./qrgenerate/qrgenerate.module').then( m => m.QRGeneratePageModule)
  },
  {
    path: 'manage-dlg',
    loadChildren: () => import('./manage-dlg/manage-dlg.module').then( m => m.ManageDlgPageModule)
  },  {
    path: 'setup-plan',
    loadChildren: () => import('./setup-plan/setup-plan.module').then( m => m.SetupPlanPageModule)
  },
  {
    path: 'apply-plan-dlg',
    loadChildren: () => import('./apply-plan-dlg/apply-plan-dlg.module').then( m => m.ApplyPlanDlgPageModule)
  },
  {
    path: 'setup-plan-config',
    loadChildren: () => import('./setup-plan-config/setup-plan-config.module').then( m => m.SetupPlanConfigPageModule)
  },
  {
    path: 'payment-bargraph',
    loadChildren: () => import('./payment-bargraph/payment-bargraph.module').then( m => m.PaymentBargraphPageModule)
  },
  {
    path: 'report-pdf',
    loadChildren: () => import('./report-pdf/report-pdf.module').then( m => m.ReportPdfPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
