// 非同期処理について
// 非同期処理の例setTimeout()
console.log("task A");
setTimeout(() => {console.log("task B");}, 1);
console.log("task C");


// 非同期処理も同期処理と同じメインスレッドで実行される
function blockTime(timeout) { // 指定時間無限ループで処理をブロックする
    const start = Date.now();
    while (true) {
        const diffTime = Date.now() - start;
        if (diffTime > timeout) {
            return;
        }
    }
}
const startTime = Date.now();
setTimeout(() => {
    const endTime = Date.now();
    console.log(`非同期処理まで${endTime - startTime}msかかりました`);
}, 10);
blockTime(2); // setTimeoutで100msを設定しても、同期処理の影響を受ける


// 非同期処理と例外処理
setTimeout(() => {
    try { // tryは非同期処理と同じブロックに
        throw new Error("非同期エラー");
    } catch (error) {
        console.log("errorをキャッチ");
    };
}, 10);


// Promiseで非同期処理の成功と失敗を扱う
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve(); // 成功の状態に
        } else {
            reject(new Error("error!!")); // 失敗の状態に
        }
    });
}, 100);
promise.then(() => {
    console.log("成功‼"); // 成功時のコールバック
}, (error) => {
    console.log(error); // 失敗時のコールバック
});


// Promiseインスタンスの作成からコールバックまでの流れ
promise = new Promise((resolve, reject) => {
    console.log("1 resolve状態のインスタンスの作成");
    resolve(123); // resolveには引数を持たせられる
    reject(); // promiseは一度しか状態が変わらないので無視
});
promise.then((value) => {
    console.log("value : " + value);
    console.log("2 コールバック関数の実行");
});
console.log("3 同期的な処理の実行"); // 1->3->2の順に実行される

// 続きは今度