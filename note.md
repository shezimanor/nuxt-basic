# SSR 筆記

SSR (Server-Side Rendering, 伺服器端渲染) 是 Nuxt 3 的核心功能之一，它能夠讓 Vue.js 應用在伺服器端生成 HTML，再將結果傳送給瀏覽器，提升 SEO、首屏渲染速度，並減少白屏時間。

## Nuxt 3 SSR 的運作流程

當用戶請求一個 Nuxt 3 頁面時，SSR 會經過 5 個主要步驟：

### 1️⃣ 用戶請求 (User Request)

### 2️⃣ Nuxt 伺服器端處理 (Server Processing)

### 3️⃣ 生成 HTML (HTML Rendering)

### 4️⃣ 客戶端 (Client-Side Hydration)

### 5️⃣ 瀏覽器開始互動

## 🚀 Nuxt 3 SSR 優勢

✅ SEO 友善：伺服器回傳完整 HTML，Google/Bing 爬蟲可索引內容。
✅ 提升首屏加載速度：HTML 內建 API 資料，減少 FCP (First Contentful Paint)。
✅ 支援 SPA 體驗：SSR 只影響 第一個頁面加載，之後變成 CSR。
✅ 可與 API 整合：適合使用 useFetch() 預取數據，避免 CSR 再發一次 API 請求。
