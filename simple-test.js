// simple-test.js
const puppeteer = require('puppeteer');
const assert = require('assert');

(async () => {
  // 1. 啟動瀏覽器（非 headless 模式）
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  });
  const page = await browser.newPage();

  // 2. 導向到目標網頁
  await page.goto('https://example.com');

  // 3. 取得頁面標題
  const title = await page.title();
  console.log('頁面標題:', title);

  // 4. 驗證標題是否為 "Example Domain"
  assert.strictEqual(title, 'Example Domain', '頁面標題不符合預期！');

  console.log('👍 標題驗證通過！');
})();
