// Mapはdict的な(key, value)のリスト
let mymap = new Map();
mymap.set("name", "Tanaka");
mymap.set("age", 25);
mymap.set("favorite", "Mrs.Green Apple");
console.log(mymap.get("name")); // get()でkeyを指定して取得
console.log(mymap.get("age"));
console.log(mymap["age"]); // python的な書き方はNG
console.log(mymap.size); // sizeでリストのサイズ


// Mapの繰り返し
for (let elem of mymap.entries()) { // entries()で[key, value]のリスト
    console.log(elem[0] + ":" + elem[1]);
};

for (let [key, value] of mymap) { // [key, value]でもOK
    console.log(key + "=>" + value);
};

for (let value of mymap.values()) { // keys()やvalue()で片方のみのリスト
    console.log(value);
};

mymap.forEach((value, key, map) => { // forEach()も使える
    console.log(key + ":" + value);
});


// Mapの操作
function kiminonaha(){
    if (mymap.has("name")) { // has()でinみたいな判定
        console.log("貴方には名がある。" + mymap.get("name") + "という名が。");
    } else {
        console.log("貴方には名がない。");
    };
};
kiminonaha();
mymap.delete("name"); // delete()でkeyを指定して削除
kiminonaha();
