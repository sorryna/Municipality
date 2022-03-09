import { Component, OnInit } from '@angular/core';
import { AddressInfo, DataService } from 'src/services/data.service';

@Component({
  selector: 'app-paid-detail',
  templateUrl: './paid-detail.page.html',
  styleUrls: ['./paid-detail.page.scss'],
})
export class PaidDetailPage implements OnInit {

  private totalData: AddressInfo[];
  
  public totalAmountData: number;
  public dispalyData: AddressInfo[] = new Array<AddressInfo>();

  constructor(private dataSvc: DataService) {

    this.totalData = dataSvc.addresses.
      filter(it => it.paymentInfo.overdueDate == null &&
        it.paymentInfo.overrideDateAmount == null &&
        it.paymentInfo.overdueAmount == null);

    this.totalAmountData = this.totalData.length;
    this.dispalyData = this.totalData.splice(0, 20);
  }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {

      let insertData = this.totalData.splice(0, 10);
      insertData.forEach(it => this.dispalyData.push(it));

      if (this.totalData.length < 1) { event.target.disabled = true; }
      event.target.complete();
    }, 1000);
  }

}
