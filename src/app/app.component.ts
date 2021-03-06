import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'รายงาน', url: '/home', icon: 'cellular' },
    { title: 'สร้างคิวอาร์โค้ดชำระเงิน', url: '/qr', icon: 'qr-code' },
    { title: 'จัดการที่อยู่', url: '/manage', icon: 'settings' },
    { title: 'ออกจากระบบ', url: '/login', icon: 'log-out' },
  ];
  constructor() {}
}
