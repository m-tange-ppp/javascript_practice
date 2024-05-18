// 現在時刻をインスタンス化する
let now = new Date();
console.log(now);
console.log(Date.now()); // インスタンス化せず時刻値のみ取得
console.log(now.getTime()); // インスタンスから時刻値を取得
console.log(now.toISOString()); // ISO 8601形式の文字列で取得


// Dateのメソッド
function formatDate(date) {
    const yyyy = String(date.getFullYear()); // getFullYear()でnumberで年を取得
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // getmonth()は0~11を返すので+1する
    const dd = String(date.getDate() + 1).padStart(2, "0");
    return `${yyyy}年${mm}月${dd}日`;
}
console.log(formatDate(now));
console.log(typeof(now.getFullYear()));

let timezoneOffset = now.getTimezoneOffset(); // 実行環境のタイムゾーンのUTCからの差分を分で
console.log(timezoneOffset);


// Dateは不便なのでdayjs
// Node.jsを使っているので、npm install dayjsからのrequire()で呼び出す
const dayjs = require("dayjs");
now = dayjs();
console.log(now.format("YYYY年MM月DD日")); // format()で形式を指定して出力
console.log(now.format("YYYY-MM-DD")); 
shogatsu = dayjs("2024-01-01"); // -区切りで日付を作成
console.log(shogatsu.format("YYYY年MM月DD日"));