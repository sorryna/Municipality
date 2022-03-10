import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-qroption',
  templateUrl: './qroption.page.html',
  styleUrls: ['./qroption.page.scss'],
})
export class QROptionPage implements OnInit {

  public navigations: any[] = [];
  public data: any;

  constructor(private dataSvc: DataService, private router: Router, private route: ActivatedRoute) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let id = params["id"];
        if (id) {
          this.data = dataSvc.addresses.find(it => it.id == id)
        }

        let navigation = params["navigation"];
        if (navigation) {
          this.navigations = JSON.parse(navigation).filter(it => it.url != "/qroption");
        }
      });
    }
  }

  ngOnInit() {
  }

  onSelectPay(value: number) {
    this.navigations.push({ url: "/qroption", text: "ช่องทางการชำระเงิน" });
    let param: NavigationExtras = { queryParams: { id: this.data.id, amount: value, navigation: JSON.stringify(this.navigations) } };
    this.router.navigate(['/qrgenerate'], param);
  }

}
