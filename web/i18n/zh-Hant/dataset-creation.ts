const translation = {
  steps: {
    header: {
      creation: '建立知識庫',
      update: '上傳檔案',
    },
    one: '選擇資料來源',
    two: '文字分段與清洗',
    three: '處理並完成',
  },
  error: {
    unavailable: '該知識庫不可用',
  },
  stepOne: {
    filePreview: '檔案預覽',
    pagePreview: '頁面預覽',
    dataSourceType: {
      file: '匯入已有文字',
      notion: '同步自 Notion 內容',
      web: '同步自 Web 站點',
    },
    uploader: {
      title: '上傳文字檔案',
      button: '拖拽檔案至此，或者',
      browse: '選擇檔案',
      tip: '已支援 {{supportTypes}}，每個檔案不超過 {{size}}MB。',
      validation: {
        typeError: '檔案型別不支援',
        size: '檔案太大了，不能超過 {{size}}MB',
        count: '暫不支援多個檔案',
        filesNumber: '批次上傳限制 {{filesNumber}}。',
      },
      cancel: '取消',
      change: '更改檔案',
      failed: '上傳失敗',
    },
    notionSyncTitle: 'Notion 未繫結',
    notionSyncTip: '同步 Notion 內容前，須先繫結 Notion 空間',
    connect: '去繫結',
    button: '下一步',
    emptyDatasetCreation: '建立一個空知識庫',
    modal: {
      title: '建立空知識庫',
      tip: '空知識庫中還沒有文件，你可以在今後任何時候上傳文件至該知識庫。',
      input: '知識庫名稱',
      placeholder: '請輸入知識庫名稱',
      nameNotEmpty: '名稱不能為空',
      nameLengthInvalid: '名稱長度不能超過 40 個字元',
      cancelButton: '取消',
      confirmButton: '建立',
      failed: '建立失敗',
    },
    website: {
      maxDepth: '最大深度',
      selectAll: '全選',
      exceptionErrorTitle: '運行 Firecrawl 作業時發生異常：',
      run: '跑',
      extractOnlyMainContent: '僅提取主要內容（無頁眉、導航、頁腳等）',
      fireCrawlNotConfiguredDescription: '使用 API 金鑰配置 Firecrawl 以使用它。',
      limit: '限制',
      crawlSubPage: '抓取子頁面',
      firecrawlDocLink: 'https://docs.dify.ai/guides/knowledge-base/sync-from-website',
      preview: '預覽',
      configure: '配置',
      excludePaths: '排除路徑',
      options: '選項',
      firecrawlDoc: 'Firecrawl 文件',
      totalPageScraped: '抓取的總頁數：',
      firecrawlTitle: '使用 🔥Firecrawl 提取 Web 內容',
      includeOnlyPaths: '僅包含路徑',
      resetAll: '全部重置',
      scrapTimeInfo: '在 {{time}} 秒內總共抓取了 {{total}} 個頁面',
      unknownError: '未知錯誤',
      fireCrawlNotConfigured: '未配置 Firecrawl',
      maxDepthTooltip: '相對於輸入的 URL 的最大爬網深度。深度 0 只是抓取輸入的 url 的頁面，深度 1 抓取 url 以及 enteredURL + 1 / 之後的所有內容，依此類推。',
      jinaReaderNotConfigured: '未配置 Jina Reader',
      jinaReaderNotConfiguredDescription: '通過輸入您的免費 API 金鑰進行訪問來設置 Jina Reader。',
      chooseProvider: '選擇供應商',
      jinaReaderDoc: '了解有關 Jina Reader 的更多資訊',
      jinaReaderTitle: '將整個網站轉換為 Markdown',
      useSitemap: '使用網站地圖',
      jinaReaderDocLink: 'https://jina.ai/reader',
      useSitemapTooltip: '按照網站地圖對網站進行爬網。否則，Jina Reader 將根據頁面相關性反覆運算抓取，從而生成更少但品質更高的頁面。',
    },
  },
  stepTwo: {
    segmentation: '分段設定',
    auto: '自動分段與清洗',
    autoDescription: '自動設定分段規則與預處理規則，如果不瞭解這些引數建議選擇此項',
    custom: '自定義',
    customDescription: '自定義分段規則、分段長度以及預處理規則等引數',
    separator: '分段識別符號',
    separatorPlaceholder: '例如換行符（\n）或特定的分隔符（如 "***"）',
    maxLength: '分段最大長度',
    overlap: '分段重疊長度',
    overlapTip: '設定分段之間的重疊長度可以保留分段之間的語義關係，提升召回效果。建議設定為最大分段長度的10%-25%',
    overlapCheck: '分段重疊長度不能大於分段最大長度',
    rules: '文字預處理規則',
    removeExtraSpaces: '替換掉連續的空格、換行符和製表符',
    removeUrlEmails: '刪除所有 URL 和電子郵件地址',
    removeStopwords: '去除停用詞，例如 “a”，“an”，“the” 等',
    preview: '確認並預覽',
    reset: '重置',
    indexMode: '索引方式',
    qualified: '高質量',
    recommend: '推薦',
    qualifiedTip: '呼叫系統預設的嵌入介面進行處理，以在使用者查詢時提供更高的準確度',
    warning: '請先完成模型供應商的 API KEY 設定。.',
    click: '前往設定',
    economical: '經濟',
    economicalTip: '使用離線的向量引擎、關鍵詞索引等方式，降低了準確度但無需花費 Token',
    QATitle: '採用 Q&A 分段模式',
    QATip: '開啟後將會消耗額外的 token',
    QALanguage: '分段使用',
    estimateCost: '執行嵌入預估消耗',
    estimateSegment: '預估分段數',
    segmentCount: '段',
    calculating: '計算中...',
    fileSource: '預處理文件',
    notionSource: '預處理頁面',
    other: '和其他 ',
    fileUnit: ' 個檔案',
    notionUnit: ' 個頁面',
    previousStep: '上一步',
    nextStep: '儲存並處理',
    save: '儲存並處理',
    cancel: '取消',
    sideTipTitle: '為什麼要分段和預處理？',
    sideTipP1: '在處理文字資料時，分段和清洗是兩個重要的預處理步驟。',
    sideTipP2: '分段的目的是將長文字拆分成較小的段落，以便模型更有效地處理和理解。這有助於提高模型生成的結果的質量和相關性。',
    sideTipP3: '清洗則是對文字進行預處理，刪除不必要的字元、符號或格式，使知識庫更加乾淨、整潔，便於模型解析。',
    sideTipP4: '透過對知識庫進行適當的分段和清洗，可以提高模型在實際應用中的表現，從而為使用者提供更準確、更有價值的結果。',
    previewTitle: '分段預覽',
    previewTitleButton: '預覽',
    previewButton: '切換至 Q&A 形式',
    previewSwitchTipStart: '當前分段預覽是文字模式，切換到 Q&A 模式將會',
    previewSwitchTipEnd: '消耗額外的 token',
    characters: '字元',
    indexSettingTip: '要更改索引方法，請轉到',
    retrievalSettingTip: '要更改檢索方法，請轉到',
    datasetSettingLink: '知識庫設定。',
    websiteSource: '預處理網站',
    webpageUnit: '頁面',
    separatorTip: '分隔符是用於分隔文字的字元。\\n\\n 和 \\n 是分隔段落和行的常用分隔符。與逗號 （\\n\\n，\\n） 組合使用時，當超過最大區塊長度時，段落將按行分段。您也可以使用自定義的特殊分隔符（例如 ***）。',
    maxLengthCheck: '塊最大長度應小於 {{limit}}',
  },
  stepThree: {
    creationTitle: '🎉 知識庫已建立',
    creationContent: '我們自動為該知識庫起了個名稱，您也可以隨時修改',
    label: '知識庫名稱',
    additionTitle: '🎉 文件已上傳',
    additionP1: '文件已上傳至知識庫：',
    additionP2: '，你可以在知識庫的文件列表中找到它。',
    stop: '停止處理',
    resume: '恢復處理',
    navTo: '前往文件',
    sideTipTitle: '接下來做什麼',
    sideTipContent: '當文件完成索引處理後，知識庫即可整合至應用內作為上下文使用，你可以在提示詞編排頁找到上下文設定。你也可以建立成可獨立使用的 ChatGPT 索引外掛釋出。',
    modelTitle: '確認停止索引過程嗎？',
    modelContent: '如果您需要稍後恢復處理，則從停止處繼續。',
    modelButtonConfirm: '確認停止',
    modelButtonCancel: '取消',
  },
  firecrawl: {
    configFirecrawl: '配置 🔥Firecrawl',
    apiKeyPlaceholder: '來自 firecrawl.dev 的 API 金鑰',
    getApiKeyLinkText: '從 firecrawl.dev 獲取 API 金鑰',
  },
  jinaReader: {
    configJinaReader: '配置 Jina Reader',
    getApiKeyLinkText: '在 jina.ai 獲取您的免費 API 金鑰',
    apiKeyPlaceholder: '來自 jina.ai 的 API 金鑰',
  },
}

export default translation