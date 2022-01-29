import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SetupPlanConfigPage } from '../setup-plan-config/setup-plan-config.page';

@Component({
  selector: 'app-setup-plan',
  templateUrl: './setup-plan.page.html',
  styleUrls: ['./setup-plan.page.scss'],
})
export class SetupPlanPage implements OnInit {

  constructor(private dlg: ModalController) { }

  ngOnInit() {
  }

  async openModal(){
    const modal = await this.dlg.create({
      component: SetupPlanConfigPage,
      cssClass: 'dialog-modal-dlg-note',
    });
    return await modal.present();
  }

}
