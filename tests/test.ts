import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Shipping great code starts with a solid platform.');
});

test('progress page has title', async ({ page }) => {
	await page.goto('/progress/updates/1');
	expect(await page.textContent('h2')).toBeDefined();
});