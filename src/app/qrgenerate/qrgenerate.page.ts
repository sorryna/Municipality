import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-qrgenerate',
  templateUrl: './qrgenerate.page.html',
  styleUrls: ['./qrgenerate.page.scss'],
})
export class QRGeneratePage implements OnInit {

  public navigations: any[] = [];
  public data: any;
  public amount: any;

  constructor(private dataSvc: DataService, private router: Router, private route: ActivatedRoute) {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        let id = params["id"];
        if (id) {
          this.data = dataSvc.addresses.find(it => it.id == id)
        }

        let amount = params["amount"];
        if (amount) {
          this.amount = amount;
        }

        let navigation = params["navigation"];
        if (navigation) {
          this.navigations = JSON.parse(navigation).filter(it => it.url != "/qrgenerate");
        }
      });
    }
  }

  ngOnInit() {
  }

  onSelectRoute(value: any) {
    if (value.url != "/qroption") { this.router.navigate([value.url]); }
    else {
      let param: NavigationExtras = { queryParams: { id: this.data.id, navigation: JSON.stringify(this.navigations) } };
      this.router.navigate([value.url], param);
    }
  }

}
