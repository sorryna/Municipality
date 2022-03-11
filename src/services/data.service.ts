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
      // ชำระแล้ว
      new AddressInfo("add-01", "บ้านเดี่ยว", "190/1", "12", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(150, 3), new PaymentDate(50, date(2022, 3, 20)), new PaymentDate(50, date(2022, 5, 1)), new PaymentInfoExtended(PaymentStatus.Prepay, new PaymentInfo(50, 1, date(2022, 4))))),
      new AddressInfo("add-05", "บ้านเดี่ยว", "2/4", "14", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(150, 3), new PaymentDate(50, date(2022, 3, 12)), new PaymentDate(50, date(2022, 4, 1)), new PaymentInfoExtended(PaymentStatus.None))),

      // ค้างชำระ
      new AddressInfo("add-21", "บ้านเดี่ยว", "8/9", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(new PaymentTime(350, 7), new PaymentDate(50, date(2021, 12, 1)), new PaymentDate(50, date(2022, 3, 1)), new PaymentInfoExtended(PaymentStatus.Overdue, new PaymentInfo(150, 3, date(2022, 1))))),
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
