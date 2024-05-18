// Mathはインスタンスを作らず、staticに使う
// 三角関数
let rad30 = Math.PI * 30 / 180;
let sin30 = Math.sin(rad30);
console.log(sin30);


// 乱数
console.log(Math.random());
for (let i = 0; i < 3; i++) {
    console.log(`${i + 1} : ${Math.random()}`);
}
for (let i = 0; i < 3; i++) {
    console.log(`1~10の乱数${i + 1}つ目 : ${Math.random() * 10}`);
}


// 最大最小
let nums = [10, 20, 50, 40, 30];
console.log(Math.max(...nums)); // ...spreadを使う
console.log(Math.min(...nums));


// 小数点いろいろ
let num1 = 1.234
let num2 = -1.234;
console.log(Math.floor(num1)); // 切り捨て
console.log(Math.floor(num2));
console.log(Math.ceil(num1)); // 切り上げ
console.log(Math.ceil(num2));
console.log(Math.round(num1)); // 四捨五入
console.log(Math.round(num2));