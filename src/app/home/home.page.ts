import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private currencyText: string = "ดูแบบเงิน"
  private householdText: string = "ดูแบบครัวเรือน"
  private isViewCurrencyChart: boolean = true;

  public buttonText: string = this.householdText;
  public chartUrl: string = "/assets/imgs/overall-currency.png";

  constructor(private menu: MenuController) {
    this.menu.enable(true);

  }

  ngOnInit() {
  }

  onSwitchChart() {
    if (this.isViewCurrencyChart) {
      this.buttonText = this.currencyText;
      this.chartUrl = "/assets/imgs/overall-household.png";
    }
    else {
      this.buttonText = this.householdText;
      this.chartUrl = "/assets/imgs/overall-currency.png";
    }
    this.isViewCurrencyChart = !this.isViewCurrencyChart;
  }

}
