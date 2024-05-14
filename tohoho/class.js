// classをつくる
class Animal {
    static japanese = "動物"; // staticでいつでもアクセス
    constructor(name, voice) { // 初期化
        this.name = name;
        this.voice = voice;
        this.number = 0;
    }
    introduceSelf() {
        console.log(`我は${this.name}なり`);
    }
    cry() {
        console.log(this.voice + "!!!!!");
    }
    set eat(n) { // setterはプロパティのように使える
        this.number += n;
    }
    get count() { // getterはプロパティのように使える
        console.log(this.number);
    }
}


// オブジェクト生成して操作する
console.log(Animal.japanese); // staticなので参照できる
let lion = new Animal("lion", "がおーん");
console.log(lion.name);
lion.introduceSelf();
lion.cry();


// setterとgetter
for (let i = 1; i < 11; i++) {
    lion.eat = i; // setterはeat(i)とはせずプロパティみたいに
}
lion.count; // getterはcount()とはせずプロパティみたいに


// prototypeで後からクラスをいじる
Animal.prototype.color; // prototypeで定義済みのクラスにメンバ追加
Animal.prototype.check = function(color) {
    this.color = color;
}
Animal.prototype.explain = function() {
    console.log(`${this.name}は${this.color}です`);
}
lion.check("Yellow"); // 既に生成したインスタンスにも適用される
lion.explain();


// クラスを継承する
class Cat extends Animal {
    constructor(color) {
        super("cat", "にゃーん"); //super()で親のコンストラクタthisより前に
        this.color = color;
    }
    nekoMeme() { // 新しいメンバを追加できる
        console.log("チピチピチャパチャパ～");
    }
}
let mikeneko = new Cat("三毛");
console.log(mikeneko.color);
mikeneko.eat = 15;
mikeneko.count;
mikeneko.cry();
mikeneko.nekoMeme();