// オブジェクトをつくる
let Otani = {
    name:"Otani Shohei",
    age:29,
    greet() {
        console.log(`My name is ${this.name} .`);
    },
    hitHomeRun(n) {
        console.log(`第${n}号ホームラン‼`);
    }
};


// オブジェクトからプロパティやメソッドを呼び出す
console.log(Otani.age);
Otani.hitHomeRun(100);


// オブジェクトを操作する
Otani.name = {first:"Shohei", last:"Otani"}; // objectの入れ子
console.log(Otani.name.first);
console.log(Otani["name"]["first"]); // ""で囲むの忘れず

Otani.height = 193; // 新しいプロパティ
console.log(Otani["height"]);
Otani.marriage = function() { // 新しいメソッド
    console.log("僕は田中さんと結婚しました");
}
Otani.marriage();
console.log(JSON.stringify(Otani)); // objectの中身を表示


// コンストラクタ関数でオブジェクトをつくる
function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.introduceSelf = function() {
        console.log(`私の名前は${this.name}、${this.age}才です。趣味は${this.hobby}です。`)
    }
}
let Tanaka = new Person("Tanaka", "12", "サッカー");
let Takahashi = new Person("Takahashi", "34", "プログラミング");
Tanaka.introduceSelf();
Takahashi.introduceSelf();
console.log(Takahashi.hobby);


// Object.create()でプロトタイプからオブジェクトをつくる
let Artist = {
    name:"Artist",
    age:0,
    greet() {
        console.log(`My name is ${this.name}.`);
    },
    relese(song) {
        console.log(`${song}をリリースしたよ‼！`);
    }
};

let Mrs = Object.create(Artist);
Mrs.greet();
Mrs.name = "Mrs.GREEN APPLE";
Mrs.age = 29;
Mrs.greet();
Mrs.relese("ライラック");
console.log(Object.keys(Mrs)); // keyのリストを取得
console.log(Object.values(Mrs)); // valueのリストを取得
console.log(Object.entries(Mrs)); // [key, value]のリストを取得


// setとget
let MyPoint = {
    total: 0,
    get moru() {
        return this.total + 5;
    },
    set addScore(x) {
        this.total += x;
    },
}

console.log(MyPoint.total);
console.log(MyPoint.moru); // getは()使わない
console.log(MyPoint.total);
MyPoint.addScore = 65; // addScore(65)ではない
console.log(MyPoint.total);
console.log(MyPoint.moru);


// Object.keys, values, entriesで配列取得
console.log(Object.keys(MyPoint));
console.log(Object.values(MyPoint));
console.log(Object.entries(MyPoint).flat().forEach(elem => {
    console.log(elem);
}));


// Object.assignでオブジェクトのマージ
const objA = {
    name:"A",
    age:28,
    greet() {
        console.log(`私の名前は${this.name}です。`);
    },
};
const objB = {
    name:"B",
    hobby:"プログラミング",
    introduceSelf() {
        console.log(`私の名前は${this.name}です。趣味は${this.hobby}です。`);
    },
};

const objM1 = Object.assign({}, objB, objA); // {}に残りの引数のオブジェクトのプロパティを追加
objM1.greet(); // 後ろの引数が後で追加される。nameが上書きされている
objM1.introduceSelf();

const objM2 = Object.assign(objA, objB);
objM2.introduceSelf();
objA.introduceSelf(); // objAが変更されている
console.log(objA === objM2);

const objM3 = {
    ...objA, // ...Objectでプロパティを展開できる
    ...objB,
    set rename(name) {
        this.name = name;
    },
    get saba() {
        return this.age - 5;
    }
};
objM3.introduceSelf();
objM3.rename = "Tanaka";
objM3.introduceSelf();
console.log(objM3.saba);

const shallowClone = (obj) => { // 複製をつくる関数
    return Object.assign({}, obj);
};
const cloneObjM3 = shallowClone(objM3);
cloneObjM3.introduceSelf();
console.log(objM3 === cloneObjM3);
console.log(objM3.name === cloneObjM3.name);


// プロパティの存在確認
console.log("name" in objM3);
console.log("test" in objM3);
console.log(`私は${objM3?.name}です。`);
console.log(`私は${objM3?.test}です。`); // ?.で存在しなければundifined返す