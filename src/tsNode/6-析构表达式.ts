// destructuring 通过析构表达式将对象或数组拆解成任意数量的变量
// 解析后赋值的变量名 需要 与原对象的属性名称保持一致，或者从新命名

// 对象
const stock = {
    code: 'IBM',
    age: 100
}

var {code, age} = stock
// 即将对象的属性拆分为简单的数据类型
// code = 'IBM'
// proce = 100

// 扩展
function getStock () {
    return {
        name: 'IBM',
        price: {
            price1: 200,
            price2: 400
        }
    }
}

var {name: newName, price} = getStock()
// 此时将name从新命名个了newName, 而price取到的是一个对象
// 即 newName = 'IBM'
// price = {price1: 200, price2: 400}

// 也可以直接取对象结果中的某一个属性
var {price: {price1}} = getStock()
// 在析构表达式中嵌套了一个析构表达式，结果为 priece = 200


// 数组
let arr1 = [1, 2, 3, 4]

var [num1, num2] = arr1
// num1 = 1,  num2 = 2

var [, , num3, num4] = arr1
// num3 = 3,  num4 = 4

var [num5, , , num6] = arr1
// num5 = 1,   num6 = 4

var [num7, ...arr2] = arr1
// num7 = 1
// arr2 = [2, 3, 4]