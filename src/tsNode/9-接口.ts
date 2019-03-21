// 接口 Interface
// 用来建立某种代码约定，使得其他开发者在调用某个方法或创建新的类的时候
// 必须遵守接口所定义的代码约定

interface IPerson {
    name: string
    age: number
}

class Person2 {
    constructor (public config: IPerson) {

    }
}

// 接口用法一： 调用实现接口的类时，必须满足接口定义的要求
var p3 = new Person2({
    name: 'zhangsan',
    age: 18
})