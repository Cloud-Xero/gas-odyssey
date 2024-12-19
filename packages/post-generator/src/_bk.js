// /**
//  * 「生成予約」となっているデータのみを取得する関数
//  *  @return: ２次元配列
//  */
// function getData() {
//   const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//   const lastRow = sheet.getLastRow(); // データの最終行を取得
//   const dataRange = sheet.getRange(2, 1, lastRow - 1, 7); // データ範囲（ヘッダーを除く）
//   const data = dataRange.getValues(); // データを配列で取得

//   const reservedRows = []; // 「生成予約」の行を格納する配列

//   for (let i = 0; i < data.length; i++) {
//     const status = data[i][0]; // A列（1列目）の値を取得
//     if (status === "生成予約") { // 「生成予約」と一致するか確認
//       reservedRows.push(data[i]); // 該当する行を配列に追加
//     }
//   }

//   Logger.log(reservedRows); // 「生成予約」の行データをログに出力

//   return reservedRows;

// }

// // Difyを呼び出す
// const runWorkflow = (row, apiKey) => {

//   // リクエストのペイロード
//   const payload = {
//     inputs: {
//       info: JSON.stringify({
//         theme: row[1],
//         fact: row[2],
//         example: row[3],
//         benefit: row[4],
//         cta: row[5]
//       })
//     },
//     response_mode: "blocking",
//     user: "abc-123" // ユーザーIDなど適切な値を設定
//   };

//   // リクエストオプション
//   const options = {
//     method: 'post',
//     headers: {
//       'Authorization': `Bearer ${apiKey}`,
//       'Content-Type': 'application/json'
//     },
//     payload: JSON.stringify(payload)
//   };

//   try {

//     // APIのエンドポイント
//     // const url = 'http://localhost/v1/workflows/run';
//     const url = "https://5ede-240a-61-5092-72f3-7162-3ca1-4763-4dc5.ngrok-free.app/v1/workflows/run";

//     // HTTPリクエストの送信
//     const response = UrlFetchApp.fetch(url, options);

//     // レスポンスの処理
//     const responseData = JSON.parse(response.getContentText());

//     Logger.log('Response: ' + JSON.stringify(responseData));
//     return responseData.data.outputs.result; // 必要に応じて結果を利用
//   } catch (error) {
//     // エラーハンドリング
//     Logger.log('Error: ' + error.message);
//     throw new Error('Failed to run the workflow: ' + error.message);
//   }
// }

// /**
//  * 結果（投稿）を書き込む関数
//  */
// const writeResult = (result, rowNum) => {
//   // スプレッドシートを取得
//   const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
//   const sheet = spreadsheet.getActiveSheet(); // アクティブなシートを取得

//   // 値を書き込む
//   sheet.getRange(rowNum, 7).setValue(result); //

//   // ステータス更新
//   sheet.getRange(rowNum, 1).setValue("生成済み");

//   Logger.log(`生成結果を書き込みました。`);
// }

// /**
//  * エントリーポイント
//  */
// const main = async () => {

//   // APIキー（環境変数やプロパティストアで管理することを推奨）
//   const apiKey = PropertiesService.getScriptProperties().getProperty("DIFY_API_PROD_KEY");

//   const rowList = await getData();

//   const max = rowList < 5 ? rowlist.length: 5;

//   // １度に生成するのは最大５件
//   for (i=0; i < max; i++) {
//     const result = await runWorkflow(rowList[i], apiKey);
//     writeResult(result, i+1);
//   }
// }

// /**
//  * Workflowを呼び出すためのテストメソッド
//  */
// function callDifyWorkFlow(apiKey = PropertiesService.getScriptProperties().getProperty("DIFY_API_TEST_KEY"), payload = {
//     inputs: {
//       test: "あいうえお"
//     },
//     response_mode: "blocking",
//     user: "abc-1234" // ユーザーID（任意？）
//   }) {
//   // const url = 'http://localhost/v1/workflows/run';  // localhostだとGASから呼び出せない
//   const url = "https://5ede-240a-61-5092-72f3-7162-3ca1-4763-4dc5.ngrok-free.app/v1/workflows/run";
//   const options = {
//     method: 'post',
//     headers: {
//       'Authorization': `Bearer ${apiKey}`,
//       'Content-Type': 'application/json'
//     },
//     payload: JSON.stringify(payload),
//   };

//   const response = UrlFetchApp.fetch(url, options);

//   // レスポンスの処理
//   Logger.log(response.getContentText());
// }

// const testMain = () => {
//   const apiKey = PropertiesService.getScriptProperties().getProperty("DIFY_API_PROD_KEY");
//   const payload = {
//     inputs: {

//     },
//     response_mode: "blocking",
//     user: "abc-1234"
//   };
//   callDifyWorkFlow(apiKey, payload);

// }
