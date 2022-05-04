/*
 * @Author: Reya
 * @Date: 2022-05-03 15:55:57
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-03 16:05:30
 * @Description: 类
 */

// Public:修饰的属性或方法是共有的
// Private:修饰的属性或方法是私有的 -- 子类、实例调用都报错
// Protected:修饰的属性或方法是受保护的 -- 子类可以调用，实例不可调用

class Animal {
  readonly name: string;
  constructor(name) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}
const snake = new Animal('lily')
console.log(snake.run())

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

class Cat extends Animal {
  static categories = ['mammal']
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow, ' + super.run()
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run())
console.log(Cat.categories)
