import { callDifyWorkFlow } from "../../common/src/dify";
import { getSheet } from "../../common/src/spreadsheet";
import { SHEET, apiKey, endpoint } from "./env";
import { getRowDataList } from "./get";
import { setExecutedStatus, setGeneratedPost } from "./write";

/**
 * エントリーポイント
 * @returns
 */
const main = async () => {
  const sheet = getSheet(SHEET.SHEET_NAME);

  // スプレッドシートからデータ取得
  const rowDataList: string[][] = await getRowDataList(sheet);

  for (let i = 0; i < rowDataList.length; i++) {
    if (i === 4) return; // 最大５件の生成までに絞る（GASのRate Limit対策）
    if (rowDataList[i][0] !== SHEET.STATUS.RESERVED) return;

    const actualRow = i + 2; // 実際の行は二行目から（1行目は項目名）

    // Difyのワークフローを実行
    const result = await callDifyWorkFlow(rowDataList[i], apiKey, endpoint);

    if (!result) {
      // ステータス更新（生成失敗）
      setExecutedStatus(sheet, actualRow, SHEET.STATUS.FAILED);
      return;
    }

    // 生成されたポストをスプレッドシートに書き込む
    await setGeneratedPost(sheet, actualRow, result);
    // ステータス更新（生成成功）
    setExecutedStatus(sheet, actualRow, SHEET.STATUS.GENERATED);
  }
};

// biome-ignore lint/suspicious/noExplicitAny: GASのグローバル変数を使用する必要があるため
declare let global: any;
global.main = main;
