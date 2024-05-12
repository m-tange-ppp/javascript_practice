// \nで改行
console.log("おはよう\n日本");

// ""の中では''使う
console.log("HTMLと合わせて使う'シングルクォート'");

// `${code}`でf-string的な使い方できる
let name = "Tange";
let age = 29;
console.log(`私は${name + "というもので" + age}才です`);

// lengthで長さを取得
let s1 = "Tange Mitsuhisa";
console.log(`${s1}の長さは${s1.length}です`);

// 部分文字列のいろいろ
s1 = "あいうえおかきくけこ";
for (let i = 0; i < s1.length; i++) {
    console.log(s1[i]);
}
console.log(s1.substring(2, 4));
console.log(s1.slice(2, 4));
console.log(s1.substring(-1, 4)); // 負の数は0
console.log(s1.slice(-4, 9)); // 負の数は後ろから
console.log(s1.slice(2)); // 第2引数省略すると最後まで
s1 = "  A B C  ";
console.log(s1);
console.log(s1.trim()); // trim()で前後の空白除く
console.log(s1.trimStart()); // 前のみ 
console.log(s1.trimEnd()); // 後ろのみ

// 文字列の分割
s1 = "12:34:56";
sp1 = s1.split(":"); // 区切り文字を指定
sp2 = s1.split(""); // 一文字ずつ分ける
sp3 = s1.split(); // 分けない
console.log(sp1);
console.log(sp2);
console.log(sp3);
console.log(s1.concat(":78", ":910")); // 後ろに連結
console.log(s1.repeat(3)); // 文字列の繰り返し

// 文字列の置換
s1 = "あいうえおかきくけこかきくけこ";
console.log(s1.replace("かきくけこ", "がぎぐげご")); // 初めに一致した箇所だけ置換
console.log(s1.replaceAll("かきくけこ", "がぎぐげご")); // 全部置換
s1 = "aBCdE";
console.log(s1.toUpperCase()); // 大文字
console.log(s1.toLowerCase()); // 小文字

// 文字列の検索
s1 = "あいうえお12345";
console.log(s1.indexOf("お"));
console.log(s1.indexOf("お", 5)); // 第2引数で検索開始位置
console.log(s1.indexOf("5", 5));
s1 = "akarasama"
console.log(s1.lastIndexOf("a")); // 最後の一致位置
console.log(s1.startsWith("aka"));
console.log(s1.endsWith("aka"));
console.log(s1.includes("kara"));


