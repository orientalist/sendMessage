# Node.js SMS Sending API

## 簡介
這個專案是一個簡單的 Node.js 應用程式，使用、通過一個 RESTful API 發送 SMS（簡訊）。它基於 `node-fetch` 和 `form-data` 來處理 HTTP 請求和表單資料，方便用戶與 SMS 發送服務進行交互。

## 功能
- 發送 SMS 訊息到指定電話號碼
- 支援自訂標題和內容
- 簡單的 API 接入方式

## 安裝與使用方式
1. 確保你已經安裝了 [Node.js](https://nodejs.org/)。
2. 在你的機器上克隆此儲存庫：
   ```bash
   git clone <repository-url>
   ```
3. 進入專案目錄：
   ```bash
   cd <project-directory>
   ```
4. 安裝必要的依賴：
   ```bash
   npm install
   ```
5. 在程式碼中設置 `domain`、`account` 和 `password` 變數，以便正確連接到 SMS API 服務。
6. 使用 AWS Lambda 或其他支持的環境運行此函數，並確保你傳遞正確的 `event` 物件，包含 `title`、`content` 和 `phone`。

## 必要的依賴模組清單
- `node-fetch`: 用於發送 HTTP 請求。
- `form-data`: 用於創建表單資料以發送至 API。

你可以在 `package.json` 中找到這些依賴模組，或者通過執行以下命令檢查已安裝的模組：
```bash
npm list
```

## 授權條款
本專案使用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 文件。