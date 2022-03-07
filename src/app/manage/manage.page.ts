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
    { "title": "บ้านทาวเฮาท์", "address": "90/55 หมู่ 27 ตำบล กุดกว้าง อำเภอเมืองขอนแก่น 40000", "plan": 2 },
    { "title": "บ้านเดี่ยว", "address": "123/6 หมู่ 27 ตำบล กุดกว้าง อำเภอเมืองขอนแก่น 40000", "plan": 1 },
    { "title": "บ้านเดี่ยว", "address": "44/12 หมู่ 6 ตำบล น้ำพอง อำเภอเมืองขอนแก่น 40000", "plan": 1 },
    { "title": "บ้านเดี่ยว", "address": "89/20 หมู่ 10 ตำบล บ้านเป็ด อำเภอเมืองขอนแก่น 40000", "plan": 1 },
    { "title": "บ้านเดี่ยว", "address": "56/9 หมู่ 18 ตำบล ในเมือง อำเภอเมืองขอนแก่น 40000", "plan": 1 },
    { "title": "พิมานคอนโดปาร์ค", "address": "989/27 ตำบล ศิลา อำเภอเมืองขอนแก่น 40000", "plan": 2 },
    { "title": "พิมานคอนโดปาร์ค", "address": "12/6 หมู่ 27 ตำบล ศิลา อำเภอเมืองขอนแก่น 40000", "plan": 2 },
    { "title": "บ้านเดี่ยว", "address": "919/2 หมู่ 27 ตำบล ในเมือง อำเภอเมืองขอนแก่น 40000", "plan": 1 },
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
