import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-manage-dlg',
  templateUrl: './manage-dlg.page.html',
  styleUrls: ['./manage-dlg.page.scss'],
})
export class ManageDlgPage implements OnInit {

  constructor(private dlg: ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.dlg.dismiss();
  }
}
