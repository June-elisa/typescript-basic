/*
 * @Author: Reya
 * @Date: 2022-05-03 17:42:02
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-03 22:32:43
 * @Description: 泛型
 */
// 使用的时候，才动态填入泛型的值

function echo<T>(arg: T): T {
  return arg
}

const result = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr([1, 2, 3])

interface IWithLength {
  length: number
}
// 约束传入的类型必须带有length属性
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

const str1 = echoWithLength('str')
const obj = echoWithLength({ length: 10, width: 10})
const arr2 = echoWithLength([1, 2, 3])

// 泛型在类中的使用
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

// 泛型在interface上的应用-- 约束传参类型
interface KeyPair<T, U> {
  key: T
  value: U 
}
let kp1: KeyPair<number, string> = { key: 1, value: "string"}
let kp2: KeyPair<string, number> = { key: 'str', value: 2 }

// 定义数组类型的两种方式
let arr: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2,3]
