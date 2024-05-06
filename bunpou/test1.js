console.log("yes")
console.log("no")
var foo = 10
console.log(foo)
foo = 10 ** 4
console.log(foo)
var a
console.log(a) //undefinedが出力される。エラーではない。


function message() {
    console.log("Hello World !!")
}
message()
message()
function add_a(){
    a = 10
    a ++
    console.log(a)
}
add_a()
console.log(a) //varがない場合、function内空でもグローバル変数になる。


function boolean_test(){
    var a = 1
    var b = 0
    if (a){
        console.log("aは1です")
    }else{
        console.log("bは1です")
    }
    a = 0
    b = 1
    if (a){
        console.log("aは1です")
    }else{
        console.log("bは1です")
    }
}
boolean_test()


function non_iqual_test(){
    var a = 1
    var b = 2
    if (a == 1 && b == 2){
        console.log("aは1でbは2です")
    }
    if ((a == 1 || b == 2) && 5 != 5){
        console.log("aは1またはbは2で、5は5じゃない")
    }
}
non_iqual_test()


function display_add(a, b){
    console.log(a + b)
}
display_add(1, 1)
display_add("1", "2")
function plus3(a, b, c){
    console.log(a + b + c)
}
plus3(10, 100, -50)
function answer10(a, b){
    if (a + b == 10){
        console.log("正解")
    } else{
        console.log("不正解")
    }
}
answer10(5, 5)
answer10(5, 10)
a = "グローバル"
function test(){
    var a = 1
    console.log(a)
    a = 2 //ローカル変数に代入
    console.log(a)
}
test()
console.log(a)
a = "グローバル" //基本的にはvarをつける。
function test_another(){
    a = 2 //グローバル変数に代入
    console.log(a)
}
test_another()
console.log(a)
function outer_check(){
    var a = 2
    cl = console.log
    cl(a, "これは外側")
    function inner_check(){
        var a = 20
        cl(a, "これは内側")
    }
    inner_check()
    cl(a, "これは外側")
}
outer_check()
var a = 1
function main(){
    var b = 2
    function inner(){
        console.log(a, b)
    }
    inner()
}
main()


function know_let(){
    if (true){
        let leta = 2
        console.log(leta, "letaです")
    }
    // console.log(leta) letはifブロック内のみ生きる
    if (true){
        var vara = 200
        console.log(vara, "varaです")
    }
    console.log(vara, "varaです") // varはifブロック以降も生きる
}
know_let()
// console.log(vara, "varaです") 関数外は生きていない


for (let i = 0; i < 10; i++){ // letを使う
    console.log(i)
}
for (let i = 0; i < 5; i++){
    console.log(i + i)
}
var i = 10
for (let i = 0; i < 6; i++){
    console.log(i ** i)
}
console.log(i ** i) // forより前のiを参照
for (let i = 0; i < 5; i++) {
    if (i % 2 == 0) {
        console.log(i + "は偶数")
    } else {
        console.log(i + "は奇数")
    }
}
for (let i = 0; i <= 100; i += 11) {
    if (0 <= i && i < 25) { // 3項演項子はない
        console.log(i + "は0以上")
    } else if (25 <= i && i < 50){
        console.log(i + "は25以上")
    } else if (50 <= i && i < 75){
        console.log(i + "は50以上")
    } else {
        console.log(i + "は75以上")
    }
}


var fruits = []
fruits.push("りんご", "バナナ", 69) // 異なる型でもOK
console.log(fruits)
console.log(fruits[0])
console.log(fruits[2])
console.log(fruits.length)
fruits.length = 5 // 長さを指定できる
console.log(fruits)
console.log(fruits[4]) // undifined
fruits[4] = "第5の悪魔の実"
console.log(fruits[4])
for (let i = 0; i < fruits.length; i ++) {
    console.log((i + 1) + "番目の要素は" + fruits[i])
}
fruits[3] = "fruit4";
fruits.unshift("オレンジ"); // 先頭に挿入
console.log(fruits);
fruits.splice(1, 0, "ぶどう"); // 第1引数に挿入、第2引数はそれ以降削除する要素数
console.log(fruits);
fruits.shift(); // 先頭を削除
console.log(fruits);
fruits.splice(2, 1); // 第1引数から第2引数分削除する
console.log(fruits);
