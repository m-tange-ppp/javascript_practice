// 可変長引数
function showAllSum(...args) { // ...argsで可変長変数
    let s = 0;
    args.forEach(n => {
        s += n;
    });
    console.log(s);
}
showAllSum(1, 2, 3, 4);
showAllSum(1, 2);


// コールバック関数で後から関数呼び出し
setTimeout(function() {
    console.log("One second later ...");
}, 1000);
showAllSum(3, 4, 5); // コールバック関数より前に処理される


// 再帰関数
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(6));


// アロー関数
let mySum1 = (a, b) => {return a + b;}
console.log(mySum1(12, 13));

let mySum2 = (a, b) => a + b; // {}とreturnを省略できる
console.log(mySum2(13, 14));

let myShow = (...args) => { // 可変長引数使える
    args.forEach((n) => console.log(n));
}
myShow(1, 2, 3);
