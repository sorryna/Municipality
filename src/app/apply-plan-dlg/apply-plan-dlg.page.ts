import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-apply-plan-dlg',
  templateUrl: './apply-plan-dlg.page.html',
  styleUrls: ['./apply-plan-dlg.page.scss'],
})
export class ApplyPlanDlgPage implements OnInit {

  constructor(private dlg: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.dlg.dismiss();
  }
}
