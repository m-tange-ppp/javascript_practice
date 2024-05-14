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