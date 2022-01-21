import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid-detail',
  templateUrl: './paid-detail.page.html',
  styleUrls: ['./paid-detail.page.scss'],
})
export class PaidDetailPage implements OnInit {

  public date: string = new Date(Date.now()).toISOString();

  constructor() { }

  ngOnInit() {
  }

}
