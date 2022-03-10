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
      new AddressInfo("add-01", "บ้านเดี่ยว", "190/1", "12", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "20 มกราคม 2564", 50, "1 เมษายน 2564", 50, 3, 150)),
      new AddressInfo("add-02", "บ้านเดี่ยว", "60", "12", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "22 มกราคม 2564", 50, "1 เมษายน 2564", 50, 3, 150)),
      new AddressInfo("add-03", "บ้านเดี่ยว", "23/5", "12", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "3 มกราคม 2564", 50, "1 เมษายน 2564", 50, 3, 150)),
      new AddressInfo("add-04", "บ้านเดี่ยว", "123/56", "14", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "12 มกราคม 2564", 50, "1 เมษายน 2564", 50, 3, 150)),
      new AddressInfo("add-05", "บ้านเดี่ยว", "2/4", "14", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "12 มกราคม 2564", 50, "1 เมษายน 2564", 50, 3, 150)),
      new AddressInfo("add-06", "บ้านเดี่ยว", "99/1", "14", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "7 มกราคม 2564", 50, "1 เมษายน 2564", 50, 3, 150)),
      new AddressInfo("add-07", "บ้านเดี่ยว", "7/3", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "13 กุมภาพันธ์ 2564", 50, "1 เมษายน 2564", 50, 3, 150)),
      new AddressInfo("add-08", "บ้านเดี่ยว", "7/1", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "11 กุมภาพันธ์ 2564", 50, "1 เมษายน 2564", 50, 3, 150)),
      new AddressInfo("add-09", "บ้านเดี่ยว", "919/3", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "5 กุมภาพันธ์ 2564", 50, "1 เมษายน 2564", 50, 3, 150)),
      new AddressInfo("add-10", "พิมานคอนโดปาร์ค", "989", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(4, 200, "4 มีนาคม 2564", 50, "1 พฤษภาคม 2564", 50, 4, 200)),
      new AddressInfo("add-11", "พิมานคอนโดปาร์ค", "7/5", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(4, 200, "4 มีนาคม 2564", 50, "1 พฤษภาคม 2564", 50, 4, 200)),
      new AddressInfo("add-12", "พิมานคอนโดปาร์ค", "12/6", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(4, 200, "19 มีนาคม 2564", 50, "1 พฤษภาคม 2564", 50, 4, 200)),
      new AddressInfo("add-13", "บ้านเดี่ยว", "7/2", "27", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(4, 200, "12 มกราคม 2564", 50, "1 พฤษภาคม 2564", 50, 4, 200)),
      new AddressInfo("add-14", "บ้านเดี่ยว", "22/5", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(4, 200, "15 มีนาคม 2564", 50, "1 พฤษภาคม 2564", 50, 4, 200)),
      new AddressInfo("add-15", "บ้านเดี่ยว", "22/6", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "3 มกราคม 2564", 50, "1 กรกฎาคม 2564", 50, 6, 300)),
      new AddressInfo("add-16", "บ้านเดี่ยว", "919/2", "27", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "14 มีนาคม 2564", 50, "1 กรกฎาคม 2564", 50, 6, 300)),
      new AddressInfo("add-17", "หมู่บ้านภาภิรมย์", "111/1", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "25 กุมภาพันธ์ 2564", 50, "1 กรกฎาคม 2564", 50, 6, 300)),
      new AddressInfo("add-18", "หมู่บ้านภาภิรมย์", "111/2", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "19 มีนาคม 2564", 50, "1 กรกฎาคม 2564", 50, 6, 300)),
      new AddressInfo("add-19", "หมู่บ้านภาภิรมย์", "111/3", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "11 กุมภาพันธ์ 2564", 50, "1 สิงหาคม 2564", 50, 7, 350)),
      new AddressInfo("add-20", "บ้านเดี่ยว", "12/65", "6", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "5 กุมภาพันธ์ 2564", 50, "1 สิงหาคม 2564", 50, 7, 350)),
      new AddressInfo("add-21", "บ้านเดี่ยว", "8/9", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "15 พฤษภาคม 2564", 50, "1 สิงหาคม 2564", 50, 7, 350)),
      new AddressInfo("add-22", "บ้านทาวเฮาท์", "90/55", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "14 มิถุนายน 2564", 50, "1 สิงหาคม 2564", 50, 7, 350)),
      new AddressInfo("add-23", "บ้านเดี่ยว", "899/6", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "14 มิถุนายน 2564", 50, "1 สิงหาคม 2564", 50, 7, 350)),
      new AddressInfo("add-24", "บ้านเดี่ยว", "65/88", "10", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(9, 450, "17 กรกฎาคม 2564", 50, "1 ตุลาคม 2564", 50, 9, 450)),
      new AddressInfo("add-25", "บ้านเดี่ยว", "5/5", "10", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(9, 450, "2 พฤษภาคม 2564", 50, "1 ตุลาคม 2564", 50, 9, 450)),
      new AddressInfo("add-26", "บ้านเดี่ยว", "123/6", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(9, 450, "8 สิงหาคม 2564", 50, "1 ตุลาคม 2564", 50, 9, 450)),
      new AddressInfo("add-27", "บ้านเดี่ยว", "215", "18", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(9, 450, "17 กรกฎาคม 2564", 50, "1 ตุลาคม 2564", 50, 9, 450)),
      new AddressInfo("add-28", "บ้านทาวเฮาท์", "78/9", "18", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(9, 450, "10 กรกฎาคม 2564", 50, "1 ตุลาคม 2564", 50, 9, 450)),
      new AddressInfo("add-29", "บ้านทาวเฮาท์", "65", "18", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(8, 400, "10 ตุลาคม 2564", 50, "1 กันยายน 2564", 50, 8, 400)),
      new AddressInfo("add-30", "บ้านเดี่ยว", "44/12", "6", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(5, 250, "24 เมษายน 2564", 50, "1 มิถุนายน 2564", 50, 5, 250)),
      new AddressInfo("add-31", "บ้านเดี่ยว", "36/77", "27", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(5, 250, "18 เมษายน 2564", 50, "1 มิถุนายน 2564", 50, 5, 250)),
      new AddressInfo("add-32", "บ้านเดี่ยว", "69/99", "27", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(5, 250, "12 เมษายน 2564", 50, "1 มิถุนายน 2564", 50, 5, 250)),
      new AddressInfo("add-33", "บ้านเดี่ยว", "77/77", "27", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(5, 250, "6 เมษายน 2564", 50, "1 มิถุนายน 2564", 50, 5, 250)),
      new AddressInfo("add-34", "บ้านเดี่ยว", "89/20", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(5, 250, "31 มีนาคม 2564", 50, "1 มิถุนายน 2564", 50, 5, 250)),
      new AddressInfo("add-35", "บ้านเดี่ยว", "14/6", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "6 มิถุนายน 2564", 50, "1 กรกฎาคม 2564", 50, 6, 300)),
      new AddressInfo("add-36", "บ้านเดี่ยว", "789/23", "27", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "14 มิถุนายน 2564", 50, "1 กรกฎาคม 2564", 50, 6, 300)),
      new AddressInfo("add-37", "บ้านเดี่ยว", "15/99", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "3 มิถุนายน 2564", 50, "1 กรกฎาคม 2564", 50, 6, 300)),
      new AddressInfo("add-38", "บ้านเดี่ยว", "32/2", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "24 มิถุนายน 2564", 50, "1 กรกฎาคม 2564", 50, 6, 300)),
      new AddressInfo("add-39", "บ้านเดี่ยว", "56/9", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "2 พฤษภาคม 2564", 50, "1 สิงหาคม 2564", 50, 7, 350)),
      new AddressInfo("add-40", "บ้านเดี่ยว", "14/78", "6", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "5 กุมภาพันธ์ 2564", 50, "1 สิงหาคม 2564", 50, 7, 350)),

      // ค้างชำระ
      new AddressInfo("add-41", "บ้านเดี่ยว", "190/1", "12", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(15, 750, "1 มีนาคม 2564", 50, "1 เมษายน 2564", 50, null, null, "เมษายน 2564 - มีนาคม 2565", 12, 600)),
      new AddressInfo("add-42", "บ้านเดี่ยว", "60", "12", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "22 มกราคม 2564", 50, "1 เมษายน 2564", 50,  null, null,"เมษายน 2564 - มีนาคม 2565", 12, 600)),
      new AddressInfo("add-43", "บ้านเดี่ยว", "23/5", "12", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "3 มกราคม 2564", 50, "1 เมษายน 2564", 50, null, null, "เมษายน 2564 - มีนาคม 2565", 12, 600)),
      new AddressInfo("add-44", "บ้านเดี่ยว", "123/56", "14", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "12 มกราคม 2564", 50, "1 เมษายน 2564", 50, null, null, "เมษายน 2564 - มีนาคม 2565", 12, 600)),
      new AddressInfo("add-45", "บ้านเดี่ยว", "2/4", "14", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "12 มกราคม 2564", 50, "1 เมษายน 2564", 50, null, null, "เมษายน 2564 - มีนาคม 2565", 12, 600)),
      new AddressInfo("add-46", "บ้านเดี่ยว", "99/1", "14", "", "เมืองเก่า", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "7 มกราคม 2564", 50, "1 เมษายน 2564", 50, null, null, "เมษายน 2564 - มีนาคม 2565", 12, 600)),
      new AddressInfo("add-47", "บ้านเดี่ยว", "7/3", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "13 กุมภาพันธ์ 2564", 50, "1 เมษายน 2564", 50, null, null, "เมษายน 2564 - มีนาคม 2565", 12, 600)),
      new AddressInfo("add-48", "บ้านเดี่ยว", "7/1", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "11 กุมภาพันธ์ 2564", 50, "1 เมษายน 2564", 50, null, null, "เมษายน 2564 - มีนาคม 2565", 12, 600)),
      new AddressInfo("add-49", "บ้านเดี่ยว", "919/3", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(3, 150, "5 กุมภาพันธ์ 2564", 50, "1 เมษายน 2564", 50, null, null, "เมษายน 2564 - มีนาคม 2565", 12, 600)),
      new AddressInfo("add-50", "พิมานคอนโดปาร์ค", "989", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(4, 200, "4 มีนาคม 2564", 50, "1 พฤษภาคม 2564", 50,  null, null,"2564 - มีนาคม 2565", 11, 550)),
      new AddressInfo("add-51", "พิมานคอนโดปาร์ค", "7/5", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(4, 200, "4 มีนาคม 2564", 50, "1 พฤษภาคม 2564", 50, null, null, "พฤษภาคม 2564 - มีนาคม 2565", 11, 550)),
      new AddressInfo("add-52", "พิมานคอนโดปาร์ค", "12/6", "27", "", "ศิลา", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(4, 200, "19 มีนาคม 2564", 50, "1 พฤษภาคม 2564", 50, null, null, "พฤษภาคม 2564 - มีนาคม 2565", 11, 550)),
      new AddressInfo("add-53", "บ้านเดี่ยว", "7/2", "27", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(4, 200, "12 มกราคม 2564", 50, "1 พฤษภาคม 2564", 50, null, null, "พฤษภาคม 2564 - มีนาคม 2565", 11, 550)),
      new AddressInfo("add-54", "บ้านเดี่ยว", "22/5", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(4, 200, "15 มีนาคม 2564", 50, "1 พฤษภาคม 2564", 50, null, null, "พฤษภาคม 2564 - มีนาคม 2565", 11, 550)),
      new AddressInfo("add-55", "บ้านเดี่ยว", "22/6", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "3 มกราคม 2564", 50, "1 กรกฎาคม 2564", 50, null, null, "กรกฎาคม 2564 - มีนาคม 2565", 9, 450)),
      new AddressInfo("add-56", "บ้านเดี่ยว", "919/2", "27", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "14 มีนาคม 2564", 50, "1 กรกฎาคม 2564", 50, null, null, "กรกฎาคม 2564 - มีนาคม 2565", 9, 450)),
      new AddressInfo("add-57", "หมู่บ้านภาภิรมย์", "111/1", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "25 กุมภาพันธ์ 2564", 50, "1 กรกฎาคม 2564", 50, null, null, "กรกฎาคม 2564 - มีนาคม 2565", 9, 450)),
      new AddressInfo("add-58", "หมู่บ้านภาภิรมย์", "111/2", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "19 มีนาคม 2564", 50, "1 กรกฎาคม 2564", 50, null, null, "กรกฎาคม 2564 - มีนาคม 2565", 9, 450)),
      new AddressInfo("add-59", "หมู่บ้านภาภิรมย์", "111/3", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "11 กุมภาพันธ์ 2564", 50, "1 สิงหาคม 2564", 50, null, null, "สิงหาคม 2564 - มีนาคม 2565", 8, 400)),
      new AddressInfo("add-60", "บ้านเดี่ยว", "12/65", "6", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "5 กุมภาพันธ์ 2564", 50, "1 สิงหาคม 2564", 50, null, null, "สิงหาคม 2564 - มีนาคม 2565", 8, 400)),
      new AddressInfo("add-61", "บ้านเดี่ยว", "8/9", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "15 พฤษภาคม 2564", 50, "1 สิงหาคม 2564", 50, null, null, "สิงหาคม 2564 - มีนาคม 2565", 8, 400)),
      new AddressInfo("add-62", "บ้านทาวเฮาท์", "90/55", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "14 มิถุนายน 2564", 50, "1 สิงหาคม 2564", 50, null, null, "สิงหาคม 2564 - มีนาคม 2565", 8, 400)),
      new AddressInfo("add-63", "บ้านเดี่ยว", "899/6", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "14 มิถุนายน 2564", 50, "1 สิงหาคม 2564", 50, null, null, "สิงหาคม 2564 - มีนาคม 2565", 8, 400)),
      new AddressInfo("add-64", "บ้านเดี่ยว", "65/88", "10", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(9, 450, "17 กรกฎาคม 2564", 50, "1 ตุลาคม 2564", 50, null, null, "ตุลาคม 2564 - มีนาคม 2565", 6, 300)),
      new AddressInfo("add-65", "บ้านเดี่ยว", "5/5", "10", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(9, 450, "2 พฤษภาคม 2564", 50, "1 ตุลาคม 2564", 50, null, null, "ตุลาคม 2564 - มีนาคม 2565", 6, 300)),
      new AddressInfo("add-66", "บ้านเดี่ยว", "123/6", "27", "", "กุดกว้าง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(9, 450, "8 สิงหาคม 2564", 50, "1 ตุลาคม 2564", 50, null, null, "ตุลาคม 2564 - มีนาคม 2565", 6, 300)),
      new AddressInfo("add-67", "บ้านเดี่ยว", "215", "18", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(9, 450, "17 กรกฎาคม 2564", 50, "1 ตุลาคม 2564", 50,  null, null,"2564 - มีนาคม 2565", 6, 300)),
      new AddressInfo("add-68", "บ้านทาวเฮาท์", "78/9", "18", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(9, 450, "10 กรกฎาคม 2564", 50, "1 ตุลาคม 2564", 50, null, null, "ตุลาคม 2564 - มีนาคม 2565", 6, 300)),
      new AddressInfo("add-69", "บ้านทาวเฮาท์", "65", "18", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(8, 400, "10 ตุลาคม 2564", 50, "1 กันยายน 2564", 50,  null, null,"2564 - มีนาคม 2565", 7, 350)),
      new AddressInfo("add-70", "บ้านเดี่ยว", "44/12", "6", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(5, 250, "24 เมษายน 2564", 50, "1 มิถุนายน 2564", 50, null, null, "มิถุนายน 2564 - มีนาคม 2565", 10, 500)),
      new AddressInfo("add-71", "บ้านเดี่ยว", "36/77", "27", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(5, 250, "18 เมษายน 2564", 50, "1 มิถุนายน 2564", 50, null, null, "มิถุนายน 2564 - มีนาคม 2565", 10, 500)),
      new AddressInfo("add-72", "บ้านเดี่ยว", "69/99", "27", "", "น้ำพอง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(5, 250, "12 เมษายน 2564", 50, "1 มิถุนายน 2564", 50, null, null, "มิถุนายน 2564 - มีนาคม 2565", 10, 500)),
      new AddressInfo("add-73", "บ้านเดี่ยว", "77/77", "27", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(5, 250, "6 เมษายน 2564", 50, "1 มิถุนายน 2564", 50, null, null, "มิถุนายน 2564 - มีนาคม 2565", 10, 500)),
      new AddressInfo("add-74", "บ้านเดี่ยว", "89/20", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(5, 250, "31 มีนาคม 2564", 50, "1 มิถุนายน 2564", 50, null, null, "มิถุนายน 2564 - มีนาคม 2565", 10, 500)),
      new AddressInfo("add-75", "บ้านเดี่ยว", "14/6", "10", "", "บ้านเป็ด", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "6 มิถุนายน 2564", 50, "1 กรกฎาคม 2564", 50, null, null, "กรกฎาคม 2564 - มีนาคม 2565", 9, 450)),
      new AddressInfo("add-76", "บ้านเดี่ยว", "789/23", "27", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "14 มิถุนายน 2564", 50, "1 กรกฎาคม 2564", 50, null, null, "กรกฎาคม 2564 - มีนาคม 2565", 9, 450)),
      new AddressInfo("add-77", "บ้านเดี่ยว", "15/99", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "3 มิถุนายน 2564", 50, "1 กรกฎาคม 2564", 50, null, null, "กรกฎาคม 2564 - มีนาคม 2565", 9, 450)),
      new AddressInfo("add-78", "บ้านเดี่ยว", "32/2", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(6, 300, "24 มิถุนายน 2564", 50, "1 กรกฎาคม 2564", 50, null, null, "กรกฎาคม 2564 - มีนาคม 2565", 9, 450)),
      new AddressInfo("add-79", "บ้านเดี่ยว", "56/9", "18", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "2 พฤษภาคม 2564", 50, "1 สิงหาคม 2564", 50, null, null, "สิงหาคม 2564 - มีนาคม 2565", 8, 400)),
      new AddressInfo("add-80", "บ้านเดี่ยว", "14/78", "6", "", "ในเมือง", "เมืองขอนแก่น", "ขอนแก่น", "40000", new PaymentHistory(7, 350, "5 กุมภาพันธ์ 2564", 50, "1 สิงหาคม 2564", 50, null, null, "สิงหาคม 2564 - มีนาคม 2565", 8, 400)),
    );

    this.plans = new Array<PlanInfo>(
      new PlanInfo("plan-01", "ขั้นต่ำ", 50, 9, 600, 108),
      new PlanInfo("plan-02", "บ้านจัดสรร", 100, 12, 1200, 144),
    );
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
    public paymentInfo: PaymentHistory) { }

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
    public totalPaidTimes: number,
    public totalPaidAmount: number,
    public lastedPaidDate: string,
    public lastedPaidAmount: number,
    public nextPaidDate: string,
    public nextPaidAmount: number,
    public prepayTimes: number = null,
    public prepayAmount: number = null,
    public overdueDate: string = null,
    public overdueDateAmount: number = null,
    public overdueAmount: number = null
  ) { }
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
