import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SetupPlanConfigPage } from '../setup-plan-config/setup-plan-config.page';

@Component({
  selector: 'app-setup-plan',
  templateUrl: './setup-plan.page.html',
  styleUrls: ['./setup-plan.page.scss'],
})
export class SetupPlanPage implements OnInit {

  public data = [
    { "id": 1, "displayName": "ขั้นต่ำ", "payPerMonth": 50, "payPerYear": 600, "feePerMonth": 9, "feePerYear": 108 },
    { "id": 2, "displayName": "บ้านจัดสรร", "payPerMonth": 100, "payPerYear": 1200, "feePerMonth": 12, "feePerYear": 144 },
  ];

  constructor(private dlg: ModalController) { }

  ngOnInit() {
  }

  async openAddPayment() {
    const modal = await this.dlg.create({
      component: SetupPlanConfigPage,
      componentProps: { "data": { "id": this.data.length + 1 } }
    });
    await modal.present();

    modal.onDidDismiss().then(it => {
      if (it && it.data) {
        this.data.push(it.data);
      }
    });
  }


  async openEditPayment(item: any) {
    const modal = await this.dlg.create({
      component: SetupPlanConfigPage,
      componentProps: { "data": item }
    });
    await modal.present();

    modal.onDidDismiss().then(it => {
      if (it && it.data) {
        let result = this.data.find(x => x.id == it.data.id);
        let spliceIndex = this.data.indexOf(result);
        this.data[spliceIndex] = it.data;
      }
    });
  }



}
