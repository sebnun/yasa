// const { test, expect, chromium } = require("@playwright/test");

// // Data from https://github.com/ChromeDevTools/devtools-frontend/blob/80c102878fd97a7a696572054007d40560dcdd21/front_end/sdk/NetworkManager.js#L252-L274

// test("should show a banner when the internet connection is slow", async ({ }) => {
//     const browser = await chromium.launchPersistentContext("");
//     const page = await browser.newPage();
//     const client = await page.context().newCDPSession(page);
//     await client.send("Network.enable");
//     await client.send("Network.emulateNetworkConditions", {
//         offline: false,
//         downloadThroughput: 500 * 1024 / 8 * .8,
//         uploadThroughput: 500 * 1024 / 8 * .8,
//         latency: 400 * 5,
//     });
//     await page.goto("http://localhost:3000/show?id=383");

//     // await expect(page.locator('h1')).toHaveText(
//     //     "Opps internet is slow so your experience may be degraded 🔥"
//     // );

//     await expect(page.locator('h2')).toContainText('Peep Show')
// });