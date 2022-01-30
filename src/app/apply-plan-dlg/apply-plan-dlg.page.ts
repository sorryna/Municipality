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
  public displayData: any[] = [];

  constructor(private dlg: ModalController, private fb: FormBuilder) {
    this.fg = this.fb.group({
      'plan': "1",
      'data': []
    });
  }

  ngOnInit() {
    this.fg.get('data').setValue(this.data);
    this.fg.get('data').value.forEach((element: any) => {
      this.displayData.push({ "title": element.title, "address": element.address, "plan": element.plan });
    });
  }

  onItemChange(index, event) {
    let plan = this.fg.get('plan').value;
    let alterPlan = plan == "1" ? "2" : "1";

    if (event.target.ariaChecked == 'false') {
      // Check 
      this.displayData[index].plan = plan;
    }
    else {
      // Uncheck
      this.displayData[index].plan = alterPlan;
    }
  }

  isDisableCheck(index) {
    return this.fg.get('data').value[index].plan == this.fg.get('plan').value;
  }

  onDismiss() { this.dlg.dismiss(); }
  onSubmit() {
    if (this.fg.valid) {
      this.fg.get('data').setValue(this.displayData);
      this.dlg.dismiss(this.fg.value);
    }
  }
}
