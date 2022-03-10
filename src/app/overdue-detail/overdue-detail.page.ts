import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AddressInfo, DataService } from 'src/services/data.service';

@Component({
  selector: 'app-overdue-detail',
  templateUrl: './overdue-detail.page.html',
  styleUrls: ['./overdue-detail.page.scss'],
})
export class OverdueDetailPage implements OnInit {

  private currentData: AddressInfo[] = new Array<AddressInfo>()

  public totalData: AddressInfo[] = new Array<AddressInfo>();
  public dispalyData: AddressInfo[] = new Array<AddressInfo>();

  constructor(private dataSvc: DataService, private router: Router) {

    this.totalData = dataSvc.addresses.
      filter(it => it.paymentInfo.overdueDate != null &&
        it.paymentInfo.overdueDateTimes != null &&
        it.paymentInfo.overdueAmount != null);

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

  onSelectPayOverdue(value: any) {
    let navigation = [{ url: "/home", text: "รายงาน" }, { url: "/overdue-detail", text: "ค้างชำระ" }]
    let param: NavigationExtras = { queryParams: { id: value.id, navigation: JSON.stringify(navigation) } };
    this.router.navigate(['/qroption'], param);
  }

}
