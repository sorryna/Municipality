import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overdue-detail',
  templateUrl: './overdue-detail.page.html',
  styleUrls: ['./overdue-detail.page.scss'],
})
export class OverdueDetailPage implements OnInit {
  public date: string = new Date(Date.now()).toISOString();

  constructor() { }

  ngOnInit() {
  }

}
