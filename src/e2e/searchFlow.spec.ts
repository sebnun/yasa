import { test, expect } from '@playwright/test'

test('should navigate to a show page', async ({ page }) => {
    await page.goto('/')
    await page
        .getByPlaceholder("Search TV Shows")
        .fill("peep show");
    await page.getByText('Peep Show').click()

    await expect(page).toHaveURL('http://localhost:3000/show?id=383')
    await expect(page.locator('h2')).toContainText('Peep Show')
})