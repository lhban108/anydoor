// ts在声明变量时，可以指定该变量的类型

var myName: string = 'zhang san';   // string类型

var alias: any = 'xixi';    // 任意类型

var age: number = 13;   // number类型

var man: boolean = true;    // boolean 类型

// 该方法参数是string类型, 没有返回值(void)
function test1(name: string) :void {

}

// 声明一个类
class Person {
    name: string;
    age: number
}

// 可以声明已有的类的类型
var zhangsan: Person = new Person()
zhangsan.name = 'zhangsan1'
zhangsan.age = 18;

// typeScript有类型推断机制，即未声明类型，会主动按照第一次赋值的类型推断类型
var type1 = 'aaac'
// type1 = 123 这样赋值会报错，因为通过var type1 = 'aaac'推断type1是string类型