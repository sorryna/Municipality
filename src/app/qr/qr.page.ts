import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AddressInfo, DataService } from 'src/services/data.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  private totalData: AddressInfo[];
  private currentData: AddressInfo[];

  public dispalyData: AddressInfo[] = new Array<AddressInfo>();
  constructor(private dataSvc: DataService, private router: Router) {

    this.totalData = dataSvc.addresses;

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

  onSelectItem(value: any) {
    let navigation = [{ url: "/qr", text: "สร้างคิวอาร์โค้ดชำระเงิน" }]
    let param: NavigationExtras = { queryParams: { id: value.id, navigation: JSON.stringify(navigation) } };
    this.router.navigate(['/qroption'], param);
  }

}
