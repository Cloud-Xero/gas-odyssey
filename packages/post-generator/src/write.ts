import type { SSheet } from "../../common/src/spreadsheet";
import type { SHEET } from "./env";

/**
 * 生成された投稿をスプレッドシートに書き込む
 * @param sheet
 * @param actualRow
 * @param post
 */
export const setGeneratedPost = (
  sheet: SSheet,
  actualRow: number,
  post: string,
) => {
  sheet.getRange(actualRow, 7).setValue(post);
};

/**
 * ステータス更新
 * @param sheet
 * @param actualRow
 * @param status
 */
export const setExecutedStatus = (
  sheet: SSheet,
  actualRow: number,
  status: (typeof SHEET.STATUS)[keyof typeof SHEET.STATUS],
) => {
  sheet.getRange(actualRow, 7).setValue(status);
};
