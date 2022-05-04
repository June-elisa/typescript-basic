/*
 * @Author: Reya
 * @Date: 2022-05-03 10:47:09
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-03 15:21:58
 * @Description: 数组、元组
 */

// 数组
let arrOfNumbers: number[] = [1, 2, 3]
arrOfNumbers.push(3)

function test() {
  // 类数组
  console.log(arguments)
}

// 元组：元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// 超过定义的长度会报错
let user: [string, number] = ['Reya1', 22]
// 可以通过push加，但类型要符合定义
user.push(1)
// user.push(true)

