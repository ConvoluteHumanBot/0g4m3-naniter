import puppeteer from "puppeteer";

const username = "prova";
const password = "ale";

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto("https://lobby.ogame.gameforge.com/it_IT/");

  //await new Promise((resolve) => setTimeout(resolve, 3000));

  await (
    await page.locator(
      "body > div:nth-child(5) > div > div > span.cookiebanner4 > button:nth-child(2)"
    )
  ).click();

  await (
    await page.locator("#loginRegisterTabs > ul > li:nth-child(1)")
  ).click();
  //Email and password
  await (
    await page.locator(
      "#loginForm > div:nth-child(2) > div > input[type=email]"
    )
  ).fill(username);
  await (
    await page.locator(
      "#loginForm > div:nth-child(3) > div > input[type=password]"
    )
  ).fill(password);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await browser.close();
}

main();
