import { test, expect } from "@playwright/test";

const mock = [{name: "Cam",id:1}, {name: "Táo",id:2}, {name: "Xoài",id:3}]

test('List fruits mocking API',async ({page})=>{
    await page.route('*/**/api/v1/fruits', async route =>{
        await route.fulfill({mock})
    })

    await page.goto('https://demo.playwright.dev/api-mocking');
})