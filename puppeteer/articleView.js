const puppeteer = require("puppeteer");
const { loseFocus } = require("./common");
const { loggedInput } = require("./common");

const goToArticleView = async () => {
  const { page, browser } = await loggedInput();

  const avatars = await page.$$(".MuiAvatar-square");
  await avatars[1].click();
  await page.waitForNavigation({
    waitUntil: "domcontentloaded",
  });
  await page.waitForTimeout(100);

  return {
    page,
    browser,
  };
};

// заход на страницу
const first = async () => {
  const { page, browser } = await goToArticleView();

  await page.screenshot({
    path: "./screenshots/articleView.png",
  });

  await browser.close();
};

// ввести комментарий
const second = async () => {
  const { page, browser } = await goToArticleView();

  const textArea = await page.$("textarea");
  await textArea.type(
    "Добрый день, отличная статья, вот бы еще текст был лучше этого"
  );

  await (await page.$$("button"))[2].click();
  await loseFocus(page);

  await page.waitForTimeout(500);
  await page.screenshot({
    path: "./screenshots/articleViewCommented.png",
  });

  await browser.close();
};

// лайк
const third = async () => {
  const { page, browser } = await goToArticleView();

  await (await page.$$("p"))[1].click();
  await loseFocus(page);

  await page.waitForTimeout(500);
  await page.screenshot({
    path: "./screenshots/articleLiked.png",
  });

  await browser.close();
};

(async () => {
  await first();
  await second();
  await third();
})();
