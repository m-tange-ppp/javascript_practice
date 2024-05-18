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
for (let m of mystr.matchAll(reg)) { // matchAllでmatch, index, inputのイテレータ
    console.log("match:" + m[0] + " index:" + m["index"] + " input:" + m["input"]);
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

reg = /\*+/; // gフラグがなければ一致した時点で検査終了
mystr = "abc*ds*fg**hijk*l";
console.log(mystr.match(reg));

// searchでインデックス取得
reg = /\d+/;
mystr = "abc3435bggf33";
console.log(mystr.search(reg)); // 該当箇所の初めの位置のインデックスを返す


// キャプチャリングでマッチした文字列の一部を取得
reg = /高校(\d+)/g; // ()囲みの部分だけを取得
mystr = "高校1年生 高校2年生 高校3年生";
for (let match of mystr.matchAll(reg)) {
    console.log(`match:${match[0]} capture:${match[1]} index:${match["index"]} input:${match["input"]}`);
}; // match[1]でキャプチャを取得


// replaceで正規表現を使う
reg = /もも/g; // gフラグで全部検索
mystr = "すももももももももものうち";
console.log(mystr.replace(reg, "りんご"));

reg = /(\d{4})-(\d{2})-(\d{2})/;
function toDataJp(dataString) {
    return dataString.replace(reg, (all, year, month, day) => {
        return `${year}年${month}月${day}日`; // returnの上書き
    }); // replaceでコールバック関数を使える
};
console.log(toDataJp("2024-05-18")); // 正規表現にヒット
console.log(toDataJp("あいしてる")); // 正規表現にヒットせず一つ目のreturn