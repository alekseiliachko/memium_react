const puppeteer = require("puppeteer");
const { loggedInput } = require("./common");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1640,
    height: 890,
    deviceScaleFactor: 1,
  });

  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle2",
  });

  await page.screenshot({
    path: "./screenshots/login.png",
  });

  await browser.close();
})();

(async () => {
  const { page, browser } = await loggedInput();

  await page.screenshot({
    path: "./screenshots/successfullLogin.png",
  });

  await browser.close();
})();
