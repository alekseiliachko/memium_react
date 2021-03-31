const { loseFocus } = require("./common");
const { loggedInput } = require("./common");

const goToSearch = async () => {
  const { page, browser } = await loggedInput();

  const searchIcon = await page.$("[aria-label=search]");
  await searchIcon.click();
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
(async () => {
  const { page, browser } = await goToSearch();

  await page.screenshot({
    path: "./screenshots/searchPageEmpty.png",
  });

  await browser.close();
})();

// заход на страницу
(async () => {
  const { page, browser } = await goToSearch();

  const input = await page.$("input");
  const button = (await page.$$("button"))[1];

  await input.type("Chem");
  await button.click();

  await loseFocus(page);

  await page.waitForTimeout(400);
  await page.screenshot({
    path: "./screenshots/searchPageSearched.png",
  });

  await browser.close();
})();
