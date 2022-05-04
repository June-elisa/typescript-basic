/*
 * @Author: Reya
 * @Date: 2022-05-03 16:19:19
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-03 22:56:42
 * @Description: 枚举一系列常量，可以用枚举表示
 */

// 枚举成员会被赋值成从0开始，自动递增的一个数字
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
// 取值
console.log(Direction1.Up) // 0
// 枚举还做了反向映射 -- 可以把枚举看成一个数组
console.log(Direction1[0]) // Up

// 手动给枚举项赋值，未手动赋值的枚举项会接着上一个递增
enum Direction2 {
    Up = 10,
    Down,
    Left,
    Right
}
console.log(Direction2.Up) // 10
console.log(Direction2.Down) // 11

// 字符串枚举
// 加个const关键字，会变成常量枚举，可以提升性能
const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
const value = 'UP'
if (value === Direction.Up) {
  console.log('go up!')
}