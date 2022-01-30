import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-setup-plan-config',
  templateUrl: './setup-plan-config.page.html',
  styleUrls: ['./setup-plan-config.page.scss'],
})
export class SetupPlanConfigPage implements OnInit {

  @Input() data: any;

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private dlg: ModalController, private fb: FormBuilder) {
    this.fg = this.fb.group({
      'id': null,
      'displayName': [null, Validators.required],
      'payPerMonth': [50, Validators.required],
      'payPerYear': [600, Validators.required],
      'feePerMonth': [9, Validators.required],
      'feePerYear': [108, Validators.required],
    });
  }

  ngOnInit() {
    this.fg.get('id').setValue(this.data.id);
    let isDataValid =
      this.data.displayName &&
      this.data.payPerMonth &&
      this.data.payPerYear &&
      this.data.feePerMonth &&
      this.data.feePerYear;
    if (isDataValid) {
      this.fg.get('displayName').setValue(this.data.displayName);
      this.fg.get('payPerMonth').setValue(this.data.payPerMonth);
      this.fg.get('payPerYear').setValue(this.data.payPerYear);
      this.fg.get('feePerMonth').setValue(this.data.feePerMonth);
      this.fg.get('feePerYear').setValue(this.data.feePerYear);
    }
  }

  onPayPerMonthUpdate(event) {
    this.fg.get('payPerYear').setValue(event.target.value * 12);
  }

  onFeePerMonthUpdate(event) {
    this.fg.get('feePerYear').setValue(event.target.value * 12);
  }

  onDismiss() { this.dlg.dismiss(); }
  onSubmit() {
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }

    if (this.fg.valid) {
      this.dlg.dismiss(this.fg.value);
    }
  }
}
