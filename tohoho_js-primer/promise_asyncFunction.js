// 非同期処理について
// 非同期処理の例setTimeout()
console.log("task A");
setTimeout(() => {console.log("task B");}, 500);
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
}, 100);
blockTime(200); // setTimeoutで100msを設定しても、同期処理の影響を受ける


// 非同期処理と例外処理
setTimeout(() => {
    try { // tryは非同期処理と同じブロックに
        throw new Error("非同期エラー");
    } catch (error) {
        console.log("errorをキャッチ");
    };
}, 10);