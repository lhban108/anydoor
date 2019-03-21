function test (template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age)
}

var myName = 'zhang san'

var getAge = function () {
    return 18;
}

// 用字符串模板调用方法
test`hello my name is ${myName}， I am ${getAge}`

// 字符串模板表达式的值会进入到相应的参数中
// 第一个参数： 字符串模板的值
// 第二个参数： 第一个表达式的值
// 第三个参数： 第二个表达式的值

// 调用该方法的结果是：
// -> ['hello my name is', ',I am', '']
// -> zhangsan
// -> 18