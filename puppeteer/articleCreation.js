const { loseFocus } = require("./common");
const { loggedInput } = require("./common");

const goToArticleCreation = async () => {
  const { page, browser } = await loggedInput();

  const avatar = await page.$(".MuiAvatar-circle");
  await avatar.click();
  await page.waitForTimeout(500);

  const menuElements = await page.$$("li");

  await menuElements[1].click();

  await page.waitForTimeout(100);

  return {
    page,
    browser,
  };
};

// заход на страницу
(async () => {
  const { page, browser } = await goToArticleCreation();

  await page.screenshot({
    path: "./screenshots/emptyCreation.png",
  });

  await browser.close();
})();

// Редактирование
(async () => {
  const { page, browser } = await goToArticleCreation();

  const inputs = await page.$$("input");

  await inputs[0].click({ clickCount: 3 });
  await inputs[0].type("Новый крутой заголовок");

  await inputs[1].click({ clickCount: 3 });
  await inputs[1].type("Новый второй крутой заголовок");

  await inputs[2].click();
  await page.waitForTimeout(300);

  await (await page.$("[data-value=Chemistry]")).click();

  await loseFocus(page);

  const fileInput = await page.$("input[type=file]");

  await fileInput.uploadFile("./face.jpg");

  await page.waitForTimeout(1000);

  const mediumEditor = await page.$(".medium-editor-element");

  await mediumEditor.click({ clickCount: 3 });
  await mediumEditor.type("Представим что я здесь написал статью");

  await loseFocus(page);

  await page.screenshot({
    path: "./screenshots/filledCreation.png",
  });

  const submitButton = (await page.$$(".MuiButton-label"))[0];

  await submitButton.click();
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: "./screenshots/createdArticle.png",
  });

  await browser.close();
})();
