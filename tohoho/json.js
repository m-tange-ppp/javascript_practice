// JSONからオブジェクトへの変換
let json = '{"id": 1, "name":"Tanaka"}'; // JSONはダブルクオートのみ使える
let obj;
try { // JSONとして正しい保証はないため
    obj = JSON.parse(json); // JSON.parse()でJSONをオブジェクトに
} catch (error) {
    console.log("パースに失敗しました");
};
console.log(obj);
console.log(obj.id);
console.log(typeof(obj));



// オブジェクトからJSONへの変換
console.log(JSON.stringify(obj)); // JSON.stringify()でJSON文字列に

obj = {id: 1, name: "Tanaka", birth: null};
console.log(JSON.stringify(obj)); // 第2引数なしだとnullもそのまま

function replacer(key, value) { // (key, value)に対してreplacerを定義
    if (value === null) {
        return undefined; // valueがnullの場合はJSONに含めない
    }
    return value;
}
console.log(JSON.stringify(obj, replacer)); // 第2引数にreplacerを指定してnullを排除
console.log(JSON.stringify(obj, ["name"])); // 第2引数に配列でkeyを指定して変換
console.log(JSON.stringify(obj, null, "\t")); // 第3引数でインデントを指定