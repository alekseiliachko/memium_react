const { loggedInput } = require("./common");

(async () => {
  const { page, browser } = await loggedInput();

  const avatars = await page.$$(".MuiAvatar-square");
  await avatars[0].click();
  await page.waitForNavigation({
    waitUntil: "domcontentloaded",
  });
  await page.waitForTimeout(100);

  await page.screenshot({
    path: "./screenshots/authorsFeed.png",
  });

  await browser.close();
})();
