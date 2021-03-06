import { Component, OnInit } from '@angular/core';
import { AddressInfo, DataService, PaymentStatus } from 'src/services/data.service';

@Component({
  selector: 'app-paid-detail',
  templateUrl: './paid-detail.page.html',
  styleUrls: ['./paid-detail.page.scss'],
})
export class PaidDetailPage implements OnInit {

  private currentData: AddressInfo[] = new Array<AddressInfo>()

  public totalData: AddressInfo[] = new Array<AddressInfo>()
  public dispalyData: AddressInfo[] = new Array<AddressInfo>();

  constructor(private dataSvc: DataService) {

    this.totalData = dataSvc.addresses
      .filter(it => it.payment.extend && (it.payment.extend.status == PaymentStatus.None || it.payment.extend.status == PaymentStatus.Prepay));

    let copy = this.totalData.map(it => it);
    this.currentData = copy.splice(0, 20);

    this.dispalyData = this.currentData;
  }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {

      let copy = this.totalData.map(it => it).splice(this.dispalyData.length, 10);
      copy.forEach(it => this.currentData.push(it));

      this.dispalyData = this.currentData;

      if (this.dispalyData.length >= this.totalData.length) { event.target.disabled = true; }
      event.target.complete();
    }, 1000);
  }

  onSearch(event) {
    let search = event.detail.value;
    if (search) {
      this.dispalyData = this.totalData.filter(it => it.address.includes(search)).map(it => it);
    }
    else {
      this.dispalyData = this.currentData;
    }
  }

}
