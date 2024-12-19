// 宛先のメールアドレスを取得
export const getEmailTo = (): string => {
  return PropertiesService.getScriptProperties().getProperty(
    "EMAIL_TO",
  ) as string;
};

// 送信元のメールアドレスを取得
export const getEmailFrom = () => {
  return PropertiesService.getScriptProperties().getProperty(
    "EMAIL_FROM",
  ) as string;
};
