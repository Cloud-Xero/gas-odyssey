/**
 * リクエストペイロード
 * @param row
 * @returns
 */
export const payloadInput = (
  row: string[],
): GoogleAppsScript.URL_Fetch.Payload => {
  return {
    inputs: {
      info: JSON.stringify({
        theme: row[1],
        fact: row[2],
        example: row[3],
        benefit: row[4],
        cta: row[5],
      }),
    },
  };
};
