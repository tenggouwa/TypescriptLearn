var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function greet(person) {
    return 'Hello' + person;
}
// console.log(greet(['123'])); // Error ===> Argument of type 'string[]' is not assignable to parameter of type 'string'.
console.log(greet('Tenggouwa'));
var isDone = false;
// let count: number = false; // Error  Type 'boolean' is not assignable to type 'number'.
var count = 1; // Error  Type 'boolean' is not assignable to type 'number'.
var string = 'wocao';
// const sym = Symbol();
// let obj = {
//   [sym]: 'tenggouwa'
// }
// console.log(obj[sym])
var list1 = [1, 2, 4];
var list2 = [1, 2, 5]; // 泛类型语法
// 数字枚举
var Directions;
(function (Directions) {
    Directions["NORTH"] = "NORTH";
    Directions["SOUTH"] = "SOUTH";
    Directions["EAST"] = "EAST";
    Directions["WEST"] = "WEST";
})(Directions || (Directions = {}));
var dir = Directions.NORTH;
var dir1 = 3 /* WEST */;
// 顶级类型  any unknown
var any = [1, 3, 4, 5];
// unknown的值 只能赋值给 any 和 unknown 类型的值
// unknown的值 不能被更改
var unknown = {};
// tuple类型  里面可以与数组一样 但可以保存多个不同类型的值
var tupleType = ['wocao', 1];
function noReturn() {
    console.log(11111);
}
var u = undefined;
var n = null;
var someValue = 'this is a string';
var strLength = someValue.length;
var strLength1 = someValue.length;
function isNullFun(maybeString) {
    var onlyString = maybeString;
}
var xa;
isUndefined();
console.log(2 * xa);
function isUndefined() {
    xa = 10;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log('privileges: ' + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log('startDate: ', emp.startDate);
    }
}
var a1 = {
    name: 'wocao',
    privileges: ['1']
};
printEmployeeInformation(a1);
// 类型守卫 typeof
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join('') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error('你他娘的整错类型了好吧！');
}
console.log(padLeft('1', '1111'));
var SpaceRepeating = /** @class */ (function () {
    function SpaceRepeating(numSpace) {
        this.numSpace = numSpace;
    }
    SpaceRepeating.prototype.getPaddingString = function () {
        return Array(this.numSpace + 1).join(',');
    };
    return SpaceRepeating;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
var padder = new StringPadder('6');
if (padder instanceof StringPadder) {
    console.log('我在 StringPadder 里');
}
// 自定义类型保护的类型谓词
function isNumber(x) {
    return typeof x === 'number';
}
console.log('自定义类型保护的类型谓词: ' + isNumber(1));
// =====> 联合类型
// 普通
var sayHello = function (name) {
    console.log(name);
};
sayHello('普通联合类型');
// 可辨识联合
var CarTransmission;
(function (CarTransmission) {
    CarTransmission[CarTransmission["Automatic"] = 200] = "Automatic";
    CarTransmission[CarTransmission["Manual"] = 300] = "Manual";
})(CarTransmission || (CarTransmission = {}));
// 类型守卫 使用switch case守卫
var EVALUATION_FACTOR = Math.PI;
function evaluatePrice(vehicle) {
    switch (vehicle.vType) {
        case "car":
            return vehicle.transmission * EVALUATION_FACTOR;
        case "truck":
            return vehicle.capacity * EVALUATION_FACTOR;
        case "moto":
            return vehicle.make * EVALUATION_FACTOR;
    }
}
var myTruck = { vType: 'truck', capacity: 9.5 };
console.log(evaluatePrice(myTruck));
var point = {
    x: 1,
    y: 2
};
var abc = {
    x: {
        d: true,
        e: 'semlinker',
        f: 666
    }
};
console.log('同名非基础类型属性的合并abc:' + JSON.stringify(abc));
//  ====>ts函数
// 参数类型和返回类型
function createUserId(name, id) {
    return name + id;
}
// 函数类型
var IdGenerator;
function createUserId1(name, id) {
    return name + id;
}
IdGenerator = createUserId1;
// 参数可选以及默认 （可选参数 应放在普通参数后面)
// 可选
function createUserId2(name, id, age) {
    return name + id;
}
// 默认
function createUserId3(name, id, age) {
    if (name === void 0) { name = "tenggouwa"; }
    return name + id;
}
// 剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
// typescript 数组
// 展开
var x;
var y;
var z;
var five_array = [0, 1, 2, 3, 4];
x = five_array[0], y = five_array[1], z = five_array.slice(2);
console.log(x, y, z);
// 遍历
var colors = ['red', 'green', 'blue'];
colors.forEach(function (element) {
    console.log(element);
});
// typescript 对象
var person = {
    name1: "Semlinker",
    gender: "Male"
};
var name1 = person.name1, gender = person.gender;
var person1 = {
    name2: "Semlinker",
    gender: "Male",
    address: "Xiamen"
};
// 组装对象
var personWithAge = __assign(__assign({}, person), { age: 33 });
// 获取除了某些项外的其它项
var name2 = person1.name2, rest = __rest(person1, ["name2"]);
var semlinker = {
    name: 'semlinker',
    age: 12
};
var ro = [1, 2, 3, 4];
var p1 = { name: 'p1' };
var p2 = { name: 'p2', age: 18 };
var p3 = { name: 'p3', sex: 1 };
console.log(p1, p2, p3);
var extendsX = { x: 1, y: 2 };
console.log('interface继承interface:' + JSON.stringify(extendsX));
var extendsX1 = { x: 1, y: 2 };
console.log('type继承type:' + JSON.stringify(extendsX1));
var extendsX2 = { x: 1, y: 2 };
console.log('interface继承type:' + JSON.stringify(extendsX2));
var extendsX3 = { x: 1, y: 2 };
console.log('type继承interface:' + JSON.stringify(extendsX2));
var SomePoint = /** @class */ (function () {
    function SomePoint() {
        this.x = 1;
        this.y = 2;
    }
    return SomePoint;
}());
var SomePoint1 = /** @class */ (function () {
    function SomePoint1() {
        this.x = 1;
        this.y = 2;
    }
    return SomePoint1;
}());
var SomePartialPoint1 = /** @class */ (function () {
    function SomePartialPoint1() {
        this.x = 1;
        this.y = 2;
    }
    return SomePartialPoint1;
}());
