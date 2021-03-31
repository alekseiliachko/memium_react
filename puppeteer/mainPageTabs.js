const puppeteer = require("puppeteer");
const { loseFocus } = require("./common");
const { loggedInput } = require("./common");

(async () => {
  const { page, browser } = await loggedInput();

  const buttons = await page.$$("button[role=tab]");

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    await button.click();
    await loseFocus(page);
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `screenshots/mainPageTab${i}.png` });
  }

  await browser.close();
})();
