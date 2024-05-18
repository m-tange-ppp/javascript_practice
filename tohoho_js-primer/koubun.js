// letはブロック内のみで有効
var a = 2;
let b = 2;
{
    var a = 4;
    let b = 4;
}
console.log(a);
console.log(b);
let i = 100;
for (let i = 0; i < 5; i++) {
    console.log("i ** 2", i ** 2);
}
console.log("forループ後のiさんです", i);

// ifのかきかた
for (let i = 0; i < 10; i++){
    if (i < 4) {
        console.log("i is", i, "Small!!");
    } else if (7 < i) {
        console.log("i is", i, "Big!!");
    } else {
        console.log("i is", i, "OK!!");
    }
}

// switchのかきかた
// caseでどこから始めるか、defaultで終着点
for (let i = 0; i < 6; i++){
    console.log(i);
    switch (i) {
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
        case 4:
            console.log("Three or Four");
            break;
        default:
            console.log("Other");
            break;
    }
}

// doとwhileのかきかた
// doは条件が偽でも１度は実行する
let n = 0
while (n < 5) {
    console.log(n);
    n++;
}
do {
    console.log("do内です", n);
    n++;
} while (n < 3);

// forのかきかた
// indexだけじゃなくてinとかofとかで要素ループできる
for (let i = 0; i < 3; i++) {
    console.log("iの3乗", i ** 3);
}
const Colors = ["Red", "Blue", "Green"];
for (let i in Colors) {
    console.log(Colors[i]);
}
for (let c of Colors) {
    console.log(c);
}

// breakとcontinueとlabel
// labelでbreakやcontinueするループの深さを指定できる
label1:
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let x = 10 * i + j;
            console.log(x);
            if (x % 10 == 2 && x > 10) {
                continue label1;
            }
        }
    }

// try, catch, finallyのかきかた
// tryでエラーを拾ってcatch内を実行、finallyは必ず実行する
try {
    error = doSomething();
    if (error) {
        throw "testException";
    }
} catch (e) {
    console.log(e);
} finally {
    console.log("いつも実行");
}