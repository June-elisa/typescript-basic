/*
 * @Author: Reya
 * @Date: 2022-05-03 16:07:09
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-03 16:17:56
 * @Description: class使用implements实现interface
 */
interface Radio {
  switchRadio(trigger: boolean): void;
}
interface Battery {
  checkBatteryStatus(): void;
}
// 接口之间可以继承
interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void
}

// 实现Radio这个interface
class Car implements Radio{
  switchRadio(trigger: boolean) {

  }
}

// 实现Radio、Battery这两个interface
/* class Cellphone implements Radio,Battery {
  switchRadio(trigger: boolean) {

  }
  checkBatteryStatus() {

  }
} */
class Cellphone implements RadioWithBattery {
  switchRadio(trigger: boolean) {

  }
  checkBatteryStatus() {

  }
}