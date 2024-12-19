export const SHEET = {
  SHEET_NAME: "active",
  STATUS: {
    RESERVED: "生成予約",
    GENERATED: "生成済み",
    FAILED: "生成失敗",
  },
} as const;

export const apiKey = PropertiesService.getScriptProperties().getProperty(
  "DIFY_API_PROD_KEY",
) as string;

// APIのエンドポイント
export const endpoint = PropertiesService.getScriptProperties().getProperty(
  "DIFY_PROD_ENDPOINT",
) as string;
