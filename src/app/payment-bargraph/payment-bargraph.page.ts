import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-bargraph',
  templateUrl: './payment-bargraph.page.html',
  styleUrls: ['./payment-bargraph.page.scss'],
})
export class PaymentBargraphPage implements OnInit {

  private currencyText: string = "ดูแบบเงิน"
  private householdText: string = "ดูแบบครัวเรือน"
  private isViewCurrencyChart: boolean = true;

  public buttonText: string = this.householdText;
  public chartUrl: string = "/assets/imgs/annual-payment-currency.png";
  
  constructor() { }

  ngOnInit() {
  }

  onSwitchChart() {
    if (this.isViewCurrencyChart) {
      this.buttonText = this.currencyText;
      this.chartUrl = "/assets/imgs/annual-payment-household.png";
    }
    else {
      this.buttonText = this.householdText;
      this.chartUrl = "/assets/imgs/annual-payment-currency.png";
    }
    this.isViewCurrencyChart = !this.isViewCurrencyChart;
  }

}
