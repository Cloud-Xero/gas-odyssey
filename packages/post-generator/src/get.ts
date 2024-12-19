export const getRowDataList = (sheet: GoogleAppsScript.Spreadsheet.Sheet) => {
  const lastRowNum = sheet.getLastRow(); // データの最終行数を取得
  return sheet.getRange(2, 1, lastRowNum - 1, 7).getValues() as string[][];
};
