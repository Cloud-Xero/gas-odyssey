export type SSheet = GoogleAppsScript.Spreadsheet.Sheet;

export const COL_NUMBER = {
  FIRST: 1,
  SECOND: 2,
} as const;

export const NUM_ROWS = {
  ONE: 1,
  TWO: 2,
} as const;

/**
 * シートオブジェクトを取得
 * @param sheetName
 * @returns
 */
export const getSheet = (sheetName: string) =>
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName) as SSheet;

/**
 * 指定した範囲のデータを１行取得
 * @param sheet
 * @param rowNum
 * @param colCount
 * @returns
 */
export const getRangeValues = (
  sheet: SSheet,
  rowNum: number,
  colCount: number,
): string[][] => {
  return sheet
    .getRange(rowNum, COL_NUMBER.FIRST, NUM_ROWS.ONE, colCount)
    .getValues();
};

/**
 * 追加されたデータを１行取得
 * @param sheet
 * @returns
 */
export const getPostedValues = (sheet: SSheet) => {
  const lastCol = sheet.getLastColumn();
  const lastRow = sheet.getLastRow();

  const postData = getRangeValues(sheet, lastRow, lastCol)[0];

  return { lastRow, lastCol, postData };
};
