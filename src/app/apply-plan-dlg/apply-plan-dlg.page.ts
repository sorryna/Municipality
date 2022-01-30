import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-apply-plan-dlg',
  templateUrl: './apply-plan-dlg.page.html',
  styleUrls: ['./apply-plan-dlg.page.scss'],
})
export class ApplyPlanDlgPage implements OnInit {

  @Input() data: any;

  public fg: FormGroup;

  constructor(private dlg: ModalController, private fb: FormBuilder) {
    this.fg = this.fb.group({
      'plan': "1",
      'data': []
    });
  }

  ngOnInit() {
    this.fg.get('data').setValue(this.data);
  }

  onItemChange(index, event) {


    let plan = this.fg.get('plan').value;
    let alterPlan = plan == "1" ? "2" : "1";

    let list = this.fg.get('data').value;
    if (event.target.ariaChecked == 'false') {
      // Check 
      list[index].plan = plan;
    }
    else {
      // Uncheck
      list[index].plan = alterPlan;
    }
    this.fg.get('data').setValue(list);

  }

  onDismiss() { this.dlg.dismiss(); }
  onSubmit() {
    if (this.fg.valid) {
      this.dlg.dismiss(this.fg.value);
    }
  }
}
