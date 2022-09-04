Typescript 是一种给 Javascript 添加特性的语言扩展。增加的功能包括:

1. 类型批注和编译时类型检查
2. 类型推断
3. 类型擦除
4. 借口
5. 枚举
6. Mixin
7. 泛型编程
8. 名字空间
9. 元组
10. Await

以下功能是从 ECMA 2015 反向移植而来:

1. 类
2. 模块
3. lambda 函数的箭头语法
4. 可选参数以及默认参数

第一节：Typescript 的基础语法  
每行指令是一段语句, 你可以使用分号或不使用, 分号在 Typescript 中是可选的, 建议使用。  
如果语句写在同一行则一定需要使用分号来分隔, 否则会报错, 如:

```ts
console.log("Runoob");
console.log("Google");
```

单行注释(//) 多行注释(/\* \*/)

Typescript 与面向对象
面向对象主要有两个概念：对象和类

- 对象：对象是类的一个实例，有状态和行为。
  - 例如，一条狗是一个对象， 它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。
- 类：类是一个模板，它描述一类对象的行为和状态。
- 方法：方法是类的操作的实现步骤。

```ts
class Site {
  name(): void {
    console.log("Runoob");
  }
}
var obj = new Site();
obj.name();
```
以上实例定义了一个类Site, 该类有一个方法name(), 该方法在终端上输出字符串Runoob。  
new关键字创建类的对象，该对象调用方法name()。
编译后生成的JavaScript代码如下：
```ts
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Runoob");
    };
    return Site;
}());
var obj = new Site();
obj.name();
```

第二节 Typescript基础类型
Typescript包含的数据类型如下表：

任何类型： any<br>
数字类型： number 双精度64位浮点值<br>
字符串类型： string<br>
布尔类型： boolean<br>
数组类型：
```ts
// 在元素后面加上[]
let arr: number[] = [1, 2]
// 或者使用数组泛型
let arr: Array<number> = [1, 2]
```
元组类型：
```ts
let x: [string, number];
x = ['Runoob', 1]; // 运行正常
x = [1, 'Runoob']; // 报错
console.log(x[0]); // 输出 Runoob
```
枚举类型：用于定义数值集合
```ts
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c); // 输出 2

// A 的值是被计算出来的。注意注释部分，如果某个属性的值是计算出来的，  
// 那么它后面一位的成员必须要初始化值。
const getValue = () => {
  return 0
}

enum List {
  A = getValue(),
  B = 2,  // 此处必须要初始化值，不然编译不通过
  C
}
console.log(List.A) // 0
console.log(List.B) // 2
console.log(List.C) // 3
```
void：用于标识方法返回值类型，表示该方法没有返回值。  
null, undefined,  
never 是其它类型（包含null和undefined）的子类型，代表从不会出现的值。

number 包含 null, undefined 包含 never

Any类型  
1. 类型发生改变
2. 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查。  
  变量有可选方法时
3. 定义储存各种类型数据的数组时，any[]

```ts
let x: never;
let y: number;

// 编译错误，数字类型不能转为 never 类型
x = 123;

// 运行正确，never 类型可以赋值给 never类型
x = (()=>{ throw new Error('exception')} )();

// 运行正确，never 类型可以赋值给 数字类型
y = (()=>{ throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
  throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
  while (true) {}
}
```