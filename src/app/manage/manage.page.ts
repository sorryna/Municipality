import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManageDlgPage } from '../manage-dlg/manage-dlg.page';
import { ApplyPlanDlgPage } from '../apply-plan-dlg/apply-plan-dlg.page';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  public data: any[] = [];

  constructor(private dlg: ModalController, private dataSvc: DataService) {
    this.dataSvc.addresses.forEach(it => {
      this.data.push({ title: it.displayName, address: it.fullAddress, plan: it.displayName == "บ้านเดี่ยว" ? 1 : 2 })
    });
  }

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
      componentProps: { "data": this.data }
    });
    await modal.present();

    modal.onDidDismiss().then(it => {
      if (it && it.data) {
        this.data = it.data.data;
      }
    });
  }

}
