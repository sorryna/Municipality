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

  public data = [
    { "title": "พิมานคอนโดปาร์ค", "address": "989/27 ตำบล ศิลา อำเภอเมืองขอนแก่น 40000", "plan": 1 },
    { "title": "แสนสิริ", "address": "116/13 ตำบล ขามใหญ่ อำเภอเมืองอุบลราชธานี 34000", "plan": 1 },
    { "title": "โกลเด้นนีโอ", "address": "112/73 ตำบลในเมือง อำเภอเมืองขอนแก่น 40000", "plan": 1 },
    { "title": "อภิทาวน์", "address": "7/40 ตำบลศิลา อำเภอเมืองขอนแก่น 40000", "plan": 1 },
    { "title": "พฤกษาแอร์พอร์ต", "address": "1/17 ตำบลศิลา อำเภอเมืองขอนแก่น 40000", "plan": 2 },
    { "title": "พฤกษาแอร์พอร์ต", "address": "2/17 ตำบลศิลา อำเภอเมืองขอนแก่น 40000", "plan": 2 },
  ];


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
