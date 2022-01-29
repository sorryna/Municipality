import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-setup-plan-config',
  templateUrl: './setup-plan-config.page.html',
  styleUrls: ['./setup-plan-config.page.scss'],
})
export class SetupPlanConfigPage implements OnInit {

  constructor(private dlg: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.dlg.dismiss();
  }
}
