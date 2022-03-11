import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _plans: PlanInfo[] = Array<PlanInfo>();
  public get plans(): PlanInfo[] {
    return this._plans;
  }
  private set plans(v: PlanInfo[]) {
    this._plans = v;
  }

  private _addresses: AddressInfo[] = Array<AddressInfo>();
  public get addresses(): AddressInfo[] {
    return this._addresses;
  }
  private set addresses(v: AddressInfo[]) {
    this._addresses = v;
  }

  constructor() {
    this.addresses = new Array<AddressInfo>(
      new AddressInfo("add-01", "บ้านเดี่ยว", "190/1", "12", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(150, 3), new PaymentDate(50, date(2022, 3, 20)), new PaymentDate(50, date(2022, 5, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(50, 1, date(2022, 4))))),
      new AddressInfo("add-02", "บ้านเดี่ยว", "60", "12", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(150, 3), new PaymentDate(50, date(2022, 3, 22)), new PaymentDate(50, date(2022, 7, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(150, 3, date(2022, 6))))),
      new AddressInfo("add-03", "บ้านเดี่ยว", "23/5", "12", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(150, 3), new PaymentDate(50, date(2022, 2, 3)), new PaymentDate(50, date(2022, 6, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(150, 3, date(2022, 5))))),
      new AddressInfo("add-04", "บ้านเดี่ยว", "123/56", "14", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(150, 3), new PaymentDate(50, date(2021, 6, 12)), new PaymentDate(50, date(2022, 6, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(550, 11, date(2022, 5))))),
      new AddressInfo("add-05", "บ้านเดี่ยว", "2/4", "14", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(150, 3), new PaymentDate(50, date(2022, 6, 12)), new PaymentDate(50, date(2022, 4, 1)), new PaymentInfoExtended(PaymentStatus.None))),
      new AddressInfo("add-06", "บ้านเดี่ยว", "99/1", "14", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(150, 3), new PaymentDate(50, date(2022, 1, 1)), new PaymentDate(50, date(2022, 4, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(100, 2, date(2022, 3))))),
      new AddressInfo("add-07", "บ้านเดี่ยว", "7/3", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(150, 3), new PaymentDate(50, date(2021, 12, 5)), new PaymentDate(50, date(2022, 5, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(200, 4, date(2022, 4))))),
      new AddressInfo("add-08", "บ้านเดี่ยว", "7/1", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(150, 3), new PaymentDate(50, date(2021, 11, 11)), new PaymentDate(50, date(2022, 4, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(200, 4, date(2022, 3))))),
      new AddressInfo("add-09", "บ้านเดี่ยว", "919/3", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(150, 3), new PaymentDate(50, date(2022, 1, 15)), new PaymentDate(50, date(2022, 6, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(200, 4, date(2022, 5))))),
      new AddressInfo("add-10", "พิมานคอนโดปาร์ค", "989", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(200, 4), new PaymentDate(50, date(2021, 12, 30)), new PaymentDate(50, date(2022, 4, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(150, 3, date(2022, 3))))),
      new AddressInfo("add-11", "พิมานคอนโดปาร์ค", "7/5", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(200, 4), new PaymentDate(50, date(2022, 1, 22)), new PaymentDate(50, date(2022, 7, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(250, 5, date(2022, 6))))),
      new AddressInfo("add-12", "พิมานคอนโดปาร์ค", "12/6", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(200, 4), new PaymentDate(50, date(2022, 1, 31)), new PaymentDate(50, date(2022, 8, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(300, 6, date(2022, 7))))),
      new AddressInfo("add-13", "บ้านเดี่ยว", "7/2", "27", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(200, 4), new PaymentDate(50, date(2022, 2, 1)), new PaymentDate(50, date(2022, 9, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(300, 6, date(2022, 8))))),
      new AddressInfo("add-14", "บ้านเดี่ยว", "22/5", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(200, 4), new PaymentDate(50, date(2022, 3, 5)), new PaymentDate(50, date(2022, 10, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(300, 6, date(2022, 9))))),
      new AddressInfo("add-15", "บ้านเดี่ยว", "22/6", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(300, 6), new PaymentDate(50, date(2021, 12, 4)), new PaymentDate(50, date(2022, 11, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(500, 10, date(2022, 10))))),
      new AddressInfo("add-16", "บ้านเดี่ยว", "919/2", "27", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(300, 6), new PaymentDate(50, date(2021, 12, 7)), new PaymentDate(50, date(2022, 12, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(550, 11, date(2022, 11))))),
      new AddressInfo("add-17", "หมู่บ้านภาภิรมย์", "111/1", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(300, 6), new PaymentDate(50, date(2022, 1, 13)), new PaymentDate(50, date(2022, 6, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(200, 4, date(2022, 5))))),
      new AddressInfo("add-18", "หมู่บ้านภาภิรมย์", "111/2", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(300, 6), new PaymentDate(50, date(2022, 1, 6)), new PaymentDate(50, date(2022, 4, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(100, 2, date(2022, 3))))),
      new AddressInfo("add-19", "หมู่บ้านภาภิรมย์", "111/3", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(350, 7), new PaymentDate(50, date(2022, 2, 14)), new PaymentDate(50, date(2022, 4, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(50, 1, date(2022, 3))))),
      new AddressInfo("add-20", "บ้านเดี่ยว", "12/65", "6", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(350, 7), new PaymentDate(50, date(2021, 4, 2)), new PaymentDate(50, date(2022, 5, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(600, 12, date(2465, 4))))),
      new AddressInfo("add-21", "บ้านเดี่ยว", "8/9", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(350, 7), new PaymentDate(50, date(2021, 12, 1)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(150, 3, date(2022, 1))))),
      new AddressInfo("add-22", "บ้านทาวเฮาท์", "90/55", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(350, 7), new PaymentDate(50, date(2022, 1, 22)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(100, 2, date(2022, 2))))),
      new AddressInfo("add-23", "บ้านเดี่ยว", "899/6", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(350, 7), new PaymentDate(50, date(2021, 1, 3)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(200, 4, date(2021, 12))))),
      new AddressInfo("add-24", "บ้านเดี่ยว", "65/88", "10", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(450, 9), new PaymentDate(50, date(2022, 2, 12)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(50, 1, date(2022, 3))))),
      new AddressInfo("add-25", "บ้านเดี่ยว", "5/5", "10", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(450, 9), new PaymentDate(50, date(2021, 12, 12)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(150, 3, date(2022, 1))))),
      new AddressInfo("add-26", "บ้านเดี่ยว", "123/6", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(450, 9), new PaymentDate(50, date(2022, 1, 1)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(100, 2, date(2022, 2))))),
      new AddressInfo("add-27", "บ้านเดี่ยว", "215", "18", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(450, 9), new PaymentDate(50, date(2021, 12, 5)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(150, 3, date(2022, 1))))),
      new AddressInfo("add-28", "บ้านทาวเฮาท์", "78/9", "18", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(450, 9), new PaymentDate(50, date(2021, 11, 11)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(200, 4, date(2021, 12))))),
      new AddressInfo("add-29", "บ้านทาวเฮาท์", "65", "18", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(400, 8), new PaymentDate(50, date(2022, 1, 15)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(100, 2, date(2022, 2))))),
      new AddressInfo("add-30", "บ้านเดี่ยว", "44/12", "6", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(250, 5), new PaymentDate(50, date(2021, 12, 30)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(150, 3, date(2022, 1))))),
      new AddressInfo("add-31", "บ้านเดี่ยว", "36/77", "27", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(250, 5), new PaymentDate(50, date(2022, 1, 22)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(100, 2, date(2022, 2))))),
      new AddressInfo("add-32", "บ้านเดี่ยว", "69/99", "27", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(250, 5), new PaymentDate(50, date(2022, 1, 31)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(100, 2, date(2022, 2))))),
      new AddressInfo("add-33", "บ้านเดี่ยว", "77/77", "27", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(250, 5), new PaymentDate(50, date(2022, 2, 1)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(50, 1, date(2022, 3))))),
      new AddressInfo("add-34", "บ้านเดี่ยว", "89/20", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(250, 5), new PaymentDate(50, date(2021, 12, 7)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(150, 3, date(2022, 1))))),
      new AddressInfo("add-35", "บ้านเดี่ยว", "14/6", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(300, 6), new PaymentDate(50, date(2022, 1, 13)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(100, 2, date(2022, 2))))),
      new AddressInfo("add-36", "บ้านเดี่ยว", "789/23", "27", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(300, 6), new PaymentDate(50, date(2022, 1, 6)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(100, 2, date(2022, 2))))),
      new AddressInfo("add-37", "บ้านเดี่ยว", "15/99", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(300, 6), new PaymentDate(50, date(2022, 2, 14)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(50, 1, date(2022, 3))))),
      new AddressInfo("add-38", "บ้านเดี่ยว", "32/2", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(300, 6), new PaymentDate(50, date(2021, 4, 2)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(550, 11, date(2021, 5))))),
      new AddressInfo("add-39", "บ้านเดี่ยว", "56/9", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(350, 7), new PaymentDate(50, date(2022, 3, 12)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.None))),
      new AddressInfo("add-40", "บ้านเดี่ยว", "14/78", "6", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(350, 7), new PaymentDate(50, date(2022, 3, 1)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(100, 2, date(2022, 2))))),
    );

    this.plans = new Array<PlanInfo>(
      new PlanInfo("plan-01", "ขั้นต่ำ", 50, 9, 600, 108),
      new PlanInfo("plan-02", "บ้านจัดสรร", 100, 12, 1200, 144),
    );

    function date(year: number, month: number, date: number = 1): Date {
      return new Date(year, month - 1, date);
    }
  }
}

export class AddressInfo {
  constructor(
    public id: string,
    public displayName: string,
    public address: string,
    public village: string,
    public street: string,
    public place: string,
    public district: string,
    public province: string,
    public postcode: string,
    public payment: PaymentHistory) { }

  public get fullAddress(): string {
    let address = this.address ? `${this.address} ` : "";
    let village = this.village ? `${this.village} ` : "";
    let street = this.street ? `${this.street} ` : "";
    let place = this.place ? `${this.place} ` : "";
    let district = this.district ? `${this.district} ` : "";
    let province = this.province ? `${this.province} ` : "";
    let postcode = this.postcode ? `${this.postcode} ` : "";
    return `${address}${village}${street}${place}${district}${province}${postcode}`;;
  }
}

export class PaymentHistory {
  constructor(
    // การชำระที่ผ่านมา
    public totalPaid: PaymentTime,

    // ชำระล่าสุด
    public lastedPaid: PaymentDate,

    // ชำระครั้งถัดไป	
    public nextPay: PaymentDate,

    // ชำระล่วงหน้า/ค้างชำระ
    public extend: PaymentInfoExtended = null
  ) { }
}

// จำนวนเงิน
export class PaymentBase {
  constructor(public amount: number) { }
}

// จำนวนเงิน, จำนวนครั้ง
export class PaymentTime extends PaymentBase {
  constructor(public amount: number, public times: number) { super(amount) }
}

// จำนวนเงิน, วันที่
export class PaymentDate extends PaymentBase {
  constructor(public amount: number, public date: Date) { super(amount) }
  public get localDate(): string { return this.date.toLocaleDateString("th-TH", { year: 'numeric', month: 'long', day: 'numeric' }) }
}

// จำนวนเงิน, จำนวนครั้ง, วันที่
export class PaymentInfo extends PaymentDate implements PaymentTime {
  constructor(public amount: number, public times: number, public date: Date) { super(amount, date) }
}

export class PaymentInfoExtended {
  constructor(
    public status: PaymentStatus,
    public info: PaymentInfo = null) { }
}

export enum PaymentStatus {
  None,
  Prepay, // ชำระล่วงหน้า
  Overdue // ค้างชำระ
}

export class PlanInfo {
  constructor(
    public id: string,
    public displayName: string,
    public payPerMonth: number,
    public feePerMonth: number,
    public payPerYear: number,
    public feePerYear: number) { }
}
