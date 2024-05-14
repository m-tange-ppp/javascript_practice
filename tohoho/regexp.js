// 正規表現をつくる
let alpha1 = "ABCDEF";
let alpha2 = "abcdef";
let reg1 = new RegExp("DE", "ig"); // 第2引数はフラグ、iで大文字小文字無視、gで2番目以降も検査
let reg2 = /DE/i; // こういう書き方もできる
console.log(reg1.test(alpha1)); // RegExpに文字列を検査させるイメージ
console.log(reg1.test(alpha2));
console.log(reg2.test(alpha1));
console.log(reg2.test(alpha2));


// マッチングを使う
let reg = /\d+/g; // +は1文字以上
let mystr = "iPhone 13 12:34:56 Mon";
console.log(mystr.match(reg)); // global指定してmatchでリストで取得
for (let m of mystr.matchAll(reg)) { // matchAllでイテレータ
    console.log(m);
}
reg = /ab*c/g; // *は0文字以上
mystr = "abbbcbcbabcbacbbbbbcbabbbcbabbcbbbbca";
console.log(mystr.match(reg));

reg = /[a-z]+/g; // []でいずれか 
reg1 = /[^a-z]+/g; // ^で否定
mystr = "ab1cb1a1bbcb1ab1";
console.log(mystr.match(reg));
console.log(mystr.match(reg1));

reg = /\S+/g; // \sが空白だが、大文字で否定になる
mystr = "abc ds fg hijk l";
console.log(mystr.match(reg));

reg = /\*+/g; // \でその次の文字の扱いを変えるエスケープ
mystr = "abc*ds*fg**hijk*l";
console.log(mystr.match(reg));