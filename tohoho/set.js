// setをつくる
let myset = new Set();
myset.add("Suzuki");
myset.add("Tanaka");
myset.add("Tanaka");
console.log(myset);
console.log(myset.size);
console.log(myset.has("Takahashi")); // has()で判定
myset.delete("Suzuki"); // delete()で要素削除
console.log(myset);
myset.add("Suzuki");

// setで繰り返し
for (let value of myset) {
    console.log(value);
};

for (let elem of myset.entries()) { // setではkeyとvalueが同じ値
    console.log(elem[0] + ":" + elem[1]);
};

myset.forEach(function(value, key) {
    console.log(key, value, this);
}, myset); // mysetをthisとして渡す