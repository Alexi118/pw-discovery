/*
# Javascript
## Đề bài:
Việc hiển thị ngày tháng hiện tại là một yêu cầu thường gặp trong các ứng dụng. Trong bài tập này, bạn sẽ viết một hàm để lấy ngày hiện tại và hiển thị nó theo định dạng dd/mm/yyyy.
*/

const date = new Date().toLocaleDateString();
// const date = '1/5/2024'

function getCurrentDate() {
  const addzero = date.split("/");
  let swap: string;

  for (let i = 0; i < addzero.length - 1; i++) {
    if (addzero[i].length === 1) {
      addzero[i] = `0${addzero[i]}`;
    }
  }
  swap = addzero[0];
  addzero[0] = addzero[1];
  addzero[1] = swap;

  return `Todays date is: ${addzero.join("/")}`;
}

console.log(getCurrentDate());

/*
# Playwright
- Cho trang web sau: https://demo.playwright.dev/api-mocking/
- Sử dụng kĩ thuật mocking trong Playwright để custom danh sách các loại quả trả về thành: ["Cam", "Táo", "Xoài"]
*/

import { test, expect } from "@playwright/test";

const mock = [
  { name: "Cam", id: 1 },
  { name: "Táo", id: 2 },
  { name: "Xoài", id: 3 },
];
const fruitapi = "api/v1/fruits";

test("List fruits mocking API", async ({ page }) => {
  await page.route(`*/**/${fruitapi}`, async (route) => {
    await route.fulfill({
      status: 200,
      body: JSON.stringify(mock),
    });
  });

  const responsePromise = page.waitForResponse(
    (resp) => resp.url().includes(fruitapi) && resp.status() === 200
  );

  await page.goto("https://demo.playwright.dev/api-mocking");
  const response = await responsePromise;

  await page.pause();

  expect(page.locator("ul > li")).toHaveText(["Cam", "Táo", "Xoài"]);
});
