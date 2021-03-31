const puppeteer = require("puppeteer");

async function loggedInput() {
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

  await page.type("[name=username]", "alex");
  await page.type("[name=password]", "password");

  await page.click("[type=submit]");

  await page.waitForNavigation({
    waitUntil: "networkidle2",
  });

  await page.waitForTimeout(200);

  return {
    page,
    browser,
  };
}

async function loseFocus(page) {
  // сброс фокуса
  await (await page.$("header")).click();
}

module.exports = {
  loggedInput,
  loseFocus,
};
