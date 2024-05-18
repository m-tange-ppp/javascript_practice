// 配列を作る
let arr123 = ["One", "Two", "Three"];
console.log(arr123);
console.log(arr123[1]);
let s = "ABC"
console.log(Array.from(s));
console.log(s.split(""));
console.log(Array.from([1, 2, 3], function(x) { return (x ** 2);})); // リスト内包表記ぽいやつ


// 配列の長さ
console.log(arr123.length); // 文字列と同じで長さを取得
arr123.length = 0; // 長さを代入すると配列を消去できる
console.log(arr123);
arr123 = ["One", "Two", "Three"];


// 配列のループ
for (let i = 0; i < arr123.length; i++) {
    console.log(arr123[i]);
}

arr123.forEach(function(value, index) {
    console.log(index, value);
}); // forEachでenumerateみたいな

arr123.forEach((value, index, array) => {
    console.log(index, value);
}) // function() {}はアロー関数でもいける

for (let elem of arr123.entries()) {
    console.log(elem[0] + ":" + elem[1]);
} // entries()で[key, value]のイテレータ。enumerateみたいな

for (let key of arr123.keys()) {
    console.log(key);
} // keys()でkeyのみのイテレータ

for (let value of arr123.values()) {
    console.log(value);
} // values()でvalueのみのイテレータ


// mapで新しい配列をつくる
arr123.map((value, index, array) => {console.log(index + "=>" + value);});
arr123double = arr123.map((value, index, array) => {return value + value;});
console.log(arr123double);


// 配列の検査
console.log(arr123.indexOf("Two"));
console.log(arr123.indexOf("2")); // 存在しなければ―1を返す
arrTest = [80, 63, 95, 99, 87];
function judgeEveryone(score) {
    if (arrTest.every(value => {return value >= score;})) { // every()でAllみたいなやつ
        console.log("みんな" + score + "以上で合格です！");
    } else{
        console.log(score + "点取れなかった不合格の人がいます…");
    }
}
judgeEveryone(60);
judgeEveryone(80);
function judgeAnyone(score) {
    if (arrTest.some(value => {return value >= score;})) { // some()でanyみたいなやつ
        console.log(score + "以上で合格の人がいます！");
    } else{
        console.log("みんな" + score + "点取れず不合格です…");
    }
}
judgeAnyone(99);
judgeAnyone(100);
console.log(arrTest);
console.log(arrTest.find((value) => {return value >= 90;})); // find()で最初の一致


// 配列の連結
let arr12 = ["One", "Two"];
let arr34 = ["Three", "Four"];
let arr1234 = arr12.concat(arr34); // concat()で連結
console.log(arr1234);
console.log(arr1234.join("-")); // join()で区切り文字指定文字列
console.log(arr12); // concatは非破壊
let arrSpread = [...arr12, ...arr34, 5, 6]; // ...で展開できる
console.log(arrSpread);


// 配列の追加
let arrg = ["Green"];
arrg.unshift("Red"); // unshift()で先頭に追加
arrg.push("Yellow"); // push()で末尾に追加
console.log(arrg);
arrg.shift(); // shift()で先頭を削除
console.log(arrg); 
arrg.pop();// pop()で末尾を削除
console.log(arrg);
let arrd = [1, 2, 3, 4, 5, 6];
arrd.splice(2, 3); // splice()第で1引数から第2引数分の要素を削除
console.log(arrd);
arrd = [1, 2, 3, 4, 5, 6];
arrd.splice(3); // 第2引数省略で最後まで削除
console.log(arrd);
arrTest = [98, 65, 77, 80, 79];
let arrHigh = arrTest.filter((value, index, array) => {
    return value >= 80;}); // filter()で条件を満たす要素で配列作る
console.log(arrHigh);
arrTest.sort(); // sort()で昇順ソート
console.log(arrTest);
arrTest.reverse(); // reverse()で逆順に
console.log(arrTest); 
