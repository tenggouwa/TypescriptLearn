function greet (person: string) {
  return 'Hello' + person;
}
// console.log(greet(['123'])); // Error ===> Argument of type 'string[]' is not assignable to parameter of type 'string'.
console.log(greet('Tenggouwa'));

let isDone:boolean = false;

// let count: number = false; // Error  Type 'boolean' is not assignable to type 'number'.
let count: number = 1; // Error  Type 'boolean' is not assignable to type 'number'.

let string: string = 'wocao';

// const sym = Symbol();
// let obj = {
//   [sym]: 'tenggouwa'
// }
// console.log(obj[sym])


let list1: number[] = [1, 2, 4];
let list2: Array<number> = [1, 2, 5]; // 泛类型语法


// 数字枚举
enum Directions {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}
let dir: Directions = Directions.NORTH


const enum Directions1 {
  NORTH,
  SOUTH,
  EAST,
  WEST
}
let dir1: Directions1 = Directions1.WEST


// 顶级类型  any unknown

let any: any = [1, 3, 4, 5]

// unknown的值 只能赋值给 any 和 unknown 类型的值
// unknown的值 不能被更改
let unknown: unknown = {}

// tuple类型  里面可以与数组一样 但可以保存多个不同类型的值

let tupleType: [string, number] = ['wocao', 1];


function noReturn(): void {
  console.log(11111)
}

let u: undefined = undefined;
let n: null = null;

let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
let strLength1: number = (someValue as string).length;

function isNullFun (maybeString: string | undefined | null) {
  const onlyString: string = maybeString!;
}

let xa!: number;
isUndefined();
console.log(2 * xa)

function isUndefined() {
  xa = 10;
}


// 类型守卫 in
interface Admin {
  name: string,
  privileges: string[],
}

interface Employee {
  name: string,
  startDate: Date,
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee):void {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log('privileges: ' + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log('startDate: ', emp.startDate);
  }
}

const a1 = {
  name: 'wocao',
  privileges: ['1']
}

printEmployeeInformation(a1);


// 类型守卫 typeof
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join('') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error('你他娘的整错类型了好吧！')
}

console.log(padLeft('1', '1111'));


// 类型守卫 instanceof
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeating implements Padder {
  constructor(private numSpace: number) {}
  getPaddingString() {
    return Array(this.numSpace + 1).join(',')
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

let padder: Padder = new StringPadder('6')
if (padder instanceof StringPadder) {
  console.log('我在 StringPadder 里');
}

// 自定义类型保护的类型谓词
function isNumber(x: any): x is number {
  return typeof x === 'number'
}
console.log('自定义类型保护的类型谓词: ' + isNumber(1));

// =====> 联合类型

// 普通
const sayHello = (name: string | undefined) => {
  console.log(name);
}
sayHello('普通联合类型')

// 可辨识联合
enum CarTransmission {
  Automatic = 200,
  Manual = 300,
}

interface Moto {
  vType: 'moto',
  make: number,
}

interface Car {
  vType: 'car',
  transmission: CarTransmission,
}

interface Truck {
  vType: 'truck',
  capacity: number,
}

type Vehicle = Truck | Moto | Car;

// 类型守卫 使用switch case守卫
const EVALUATION_FACTOR = Math.PI;
function evaluatePrice (vehicle: Vehicle) {
  switch(vehicle.vType) {
    case "car":
      return vehicle.transmission * EVALUATION_FACTOR;
    case "truck":
      return vehicle.capacity * EVALUATION_FACTOR;
    case "moto":
      return vehicle.make * EVALUATION_FACTOR;
  }
}

const myTruck: Truck = { vType: 'truck', capacity: 9.5 };
console.log(evaluatePrice(myTruck))


// =====> 交叉类型

type PartialPointX = { x: number };
type Point = PartialPointX & { y: number };
let point: Point = {
  x: 1,
  y: 2
}

// 同名基础类型属性的合并
interface X {
  c: string,
  d: string,
}

interface Y {
  c: number,
  e: string,
}

type XY = X & Y;
type YX = Y & X;
// The expected type comes from property 'c' which is declared here on type 'XY'
// let p: XY = {
//   c: '',
//   d: '',
//   e: '',
// } 

// 同名非基础类型属性的合并
interface D { d: boolean; }
interface E { e: string; }
interface F { f: number; }

interface A { x: D; }
interface B { x: E; }
interface C { x: F; }

type ABC = A & B & C;

let abc: ABC = {
  x: {
    d: true,
    e: 'semlinker',
    f: 666
  }
}

console.log('同名非基础类型属性的合并abc:' + JSON.stringify(abc));


//  ====>ts函数

// 参数类型和返回类型
function createUserId(name: string, id: number): string {
  return name + id
}

// 函数类型

let IdGenerator: (chars: string, nums: number) => string;

function createUserId1(name: string, id: number): string {
  return name + id;
}

IdGenerator = createUserId1;

// 参数可选以及默认 （可选参数 应放在普通参数后面)

// 可选
function createUserId2 (name: string, id: number, age?: number): string {
  return name + id
}

// 默认
function createUserId3(
  name: string = "tenggouwa",
  id: number,
  age?: number,
): string {
  return name + id
}

// 剩余参数
function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);


// typescript 数组

// 展开
let x: number; let y: number; let z: Array<number>;
let five_array = [0,1,2,3,4];
[x, y, ...z] = five_array;
console.log(x, y, z);

// 遍历
let colors: string[] = ['red', 'green', 'blue'];
colors.forEach(element => {
  console.log(element);
});


// typescript 对象

let person = {
  name1: "Semlinker",
  gender: "Male",
};

let { name1, gender } = person;

let person1 = {
  name2: "Semlinker",
  gender: "Male",
  address: "Xiamen",
};

// 组装对象
let personWithAge = { ...person, age: 33 };

// 获取除了某些项外的其它项
let { name2, ...rest } = person1;


// ====> typescript 接口

// 对象的形状
interface Person {
  name: string,
  age: number,
}

let semlinker: Person = {
  name: 'semlinker',
  age: 12,
}

// 可选只读属性
interface Person1 {
  readonly name: string;
  age?: number;
}

let ro: ReadonlyArray<number> = [1, 2, 3, 4];
// ro.push(5) // Error Property 'push' does not exist on type 'readonly number[]'.


// 任意属性
interface Person2 {
  name: string,
  age?: number,
  [propName: string]: any,
}

const p1:Person2 = { name: 'p1' };
const p2:Person2 = { name: 'p2', age: 18 };
const p3:Person2 = { name: 'p3', sex: 1 };
console.log(p1, p2, p3);

// 接口名称和类型别名区别
// 接口
interface PointDiff {
  x: number,
  y: number,
}
interface SetPointDiff {
  (x: number, y: number): void;
}

// 别名
type PointDiff1 = {
  x: number,
  y: number,
}

type setPointDiff1 = (x: number, y: number) => void;

// 与接口不一样的是 别名可以用于其他类型 原始类型、联合类型、元祖
type Name = string;
type PartialPointDiffX = { x: number; };
type PartialPointDiffY = { y: number; };
// union
type PartialPoint = PartialPointDiffX | PartialPointDiffY;
// tuple
type Data = [number, string];

// 继承 ====> 扩展 接口和类型名称不互斥 
// 接口 extends 其他类型
// 类型 & 类型和接口

// interface extends interface
interface PartialPointExtendsX { x: number; }
interface PointExtends extends PartialPointExtendsX {
  y: number
}

const extendsX:PointExtends = { x: 1, y: 2 }
console.log('interface继承interface:' + JSON.stringify(extendsX));

// type extends type
type PartialPointExtendsX1 = { x: number }
type PointExtends1 = PartialPointExtendsX1 & { y: number }

const extendsX1:PointExtends = { x: 1, y: 2 }
console.log('type继承type:' + JSON.stringify(extendsX1));

// interface extends type
type PartialPointExtendsX2 = { x: number; };
interface extendsX2 extends PartialPointExtendsX2 { y: number; }

const extendsX2:PointExtends = { x: 1, y: 2 }
console.log('interface继承type:' + JSON.stringify(extendsX2));

// type extends interface
interface PartialPointExtendsX3 { x: number; }
type PointExtends2 = PartialPointExtendsX3 & { y: number }

const extendsX3:PointExtends2 = { x: 1, y: 2 }
console.log('type继承interface:' + JSON.stringify(extendsX2));

// implements
// 类可以实现接口或者类型别名 但不能实现使用类型别名定义的联合类型

interface PointImplement {
  x: number,
  y: number,
}

class SomePoint implements PointImplement {
  x = 1;
  y = 2;
}
type PointImplement1 = {
  x: number,
  y: number,
}

class SomePoint1 implements PointImplement1 {
  x = 1;
  y = 2;
}

type PartialPoint1 = { x: number } | { y: number };

// class SomePartialPoint1 implements PartialPoint1 { // Error A class can only implement an object type or intersection of object types with statically known members.
//   x = 1;
//   y = 2;
// }

// 接口可以多次定义自动合并
interface PointMerge {
  x: number;
}
interface PointMerge {
  y: number;
}

const pointMerge: PointMerge = { x: 1, y: 2 };

