第三节 Typescript 变量声明
类型断言 (Type Assertion)
```ts
//语法格式
<类型>值
// 或
值 as 类型
```
变量作用域 只有通过对象调用的函数才能被叫方法
1. 全局作用域 - 全局变量定义在程序结构外部，它可以在你代码的任何位置使用。
2. 类作用域 - 这个变量也可以称为字段。类变量声明在一个类里头，但在类的方法外面。  
该变量可以通过类的对象来访问。类变量也可以是静态的。静态的变量可以通过类名直接访问。
3. 局部作用域 - 局部变量, 局部变量只能在声明它的一个代码块（如：方法）中使用。
```ts
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)
```
以上代码使用tsc命令编译为Javascript代码为：
```ts
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var obj = new Numbers();
console.log("实例变量: " + obj.num_val);
```

对象之间是根据reference type比较, 也就是比较他们是不是同一个东西。
```ts
var a = [], b = [];
console.log(a==b) //false

var c = {};
console.log(c=={}) // false
```

第四节 Typescript联合类型
联合类型(Union Types) Type1 | Type2 | Type3

第五节 Typescript 接口<br>
https://stackoverflow.com/questions/64970414/typescript-assigning-an-interface-or-a-type-to-a-recordstring-string  

interface与type的区别
Record<string, string>与{[key：string]:string}相同。
在你使用interface去声明变量时，它们在那一刻类型并不是最终的类型。由于interface可以
进行声明合并，所以总有可能将新成员添加到同一个interface定义的类型上。  
总结：
联合类型和交叉类型用type。
对于React组件中props及state, 使用type, 这样能保证使用组件的地方不能随意在上面添加属性。如果有自定义需求，可通过HOC二次封装。
编写第三方库时使用interface, 其更加灵活自动的类型合并可应对未知的复杂使用场景。

第六节 Typescript类  
Encapsulate(封装)
2. 继承(extends、super)  
3. 访问控制修饰符  
Typescript中, 可以使用访问控制符来保护对类、变量、方法和构造方法的访问。
- public (默认)：公有, 可以在任何地方被访问。
- protected: 受保护, 可以被其自身以及子类访问。
- private: 私有, 只能被其定义所在的类访问。<br>  
4. 静态方法(static)
5. 多态: 父类定义一个方法不去实现, 让继承他的子类去实现, 每一个子类有不同的表现多态属于继承。
6. 抽象类(abstract): 用abstract定义抽象类和抽象方法, 抽象类中的抽象方法不包含具体实现并且在派生类中实现
- 1. 抽象方法必须在抽象类中
- 2. 抽象类和抽象方法是一个标准, 定义标准后, 子类中必须包含抽象定义的方法

第七节 Typescript名字空间
用三条斜杠引用它
```ts
/// <reference path = "SomeFileName.ts" />
namespace SomeNameSpaceName {
  export interface ISomeInterfaceName {  }
  export class SomeClassName {  }
}
```