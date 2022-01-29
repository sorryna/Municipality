import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManageDlgPage } from '../manage-dlg/manage-dlg.page';
import { ApplyPlanDlgPage } from '../apply-plan-dlg/apply-plan-dlg.page';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  constructor(private dlg: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.dlg.create({
      component: ManageDlgPage,
      cssClass: 'dialog-modal-dlg-note',
    });
    return await modal.present();
  }

  async onSelectApplyPlan() {
    const modal = await this.dlg.create({
      component: ApplyPlanDlgPage,
      cssClass: 'dialog-modal-dlg-note',
    });
    return await modal.present();
  }

}
