// 用class 声明一个类
// 类中的变量和方法可以用3个修饰符: 
// 1. public(默认) 外部可访问
// 2. private   外部不可访问，只能在内部访问
// 3. proteced 受保护的,可以在类的内部被访问，也可以在他的子类被访问

class Person1 {
    protected a1: string
    private age: number

    constructor (public name:string) {
        // 虽然没有直接声明name,但是在构造函数上有修饰符public
        // 等同于 在构造函数外声明了name -> public name:string
        console.log(name)
    }

    eat () {
        console.log('I am eatting')
    }
}

var p1 = new Person1('zhangsan')

class Employee extends Person1 {

    constructor (name: string, code: number) {
        super(name)
        console.log(code)
    }

    work () {
        super.eat()
        this.doWork()
    }
    // doWork是私有的，外部不能访问
    private doWork () {
        console.log('I am working')
    }
}

var e1 = new Employee('lisi', 20)
e1.eat()
e1.work()


// 泛型 generic
// 参数化的类型，一般用来限制集合的内容

// 该数组只能放Person1类型的元素，或者Person1的子类型的元素
var workers: Array<Person1> = []
workers[0] = new Person1('zhangsan')
workers[1] = new Employee('lisi', 30)
