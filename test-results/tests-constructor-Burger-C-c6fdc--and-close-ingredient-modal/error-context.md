# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/constructor.spec.ts >> Burger Constructor >> should open and close ingredient modal
- Location: tests/constructor.spec.ts:20:7

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Burger Constructor', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.routeFromHAR('tests/hars/ingredients.har', {
  6  |       url: '*/**/api/ingredients',
  7  |       update: false
  8  |     });
> 9  |     await page.goto('/');
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  10 |   });
  11 | 
  12 |   test('should add ingredient to constructor', async ({ page }) => {
  13 |     const bun = page.locator('[data-testid="ingredient-item"]').first();
  14 |     const constructorArea = page.locator('[data-testid="constructor-area"]');
  15 |     
  16 |     await bun.dragTo(constructorArea);
  17 |     await expect(page.getByText('Краторная булка N-200i').nth(1)).toBeVisible();
  18 |   });
  19 | 
  20 |   test('should open and close ingredient modal', async ({ page }) => {
  21 |     const ingredient = page.locator('[data-testid="ingredient-item"]').first();
  22 |     await ingredient.click();
  23 | 
  24 |     const modal = page.locator('[data-testid="modal"]');
  25 |     await expect(modal).toBeVisible();
  26 |     await expect(page.getByText('Детали ингредиента')).toBeVisible();
  27 | 
  28 |     const closeButton = page.locator('[data-testid="modal"] button').first();
  29 |     await closeButton.click();
  30 |     await expect(modal).toBeHidden();
  31 |   });
  32 | 
  33 |   test('should close modal by overlay click', async ({ page }) => {
  34 |     const ingredient = page.locator('[data-testid="ingredient-item"]').first();
  35 |     await ingredient.click();
  36 |     await expect(page.locator('[data-testid="modal"]')).toBeVisible();
  37 | 
  38 |     await page.mouse.click(10, 10);
  39 |     await expect(page.locator('[data-testid="modal"]')).toBeHidden();
  40 |   });
  41 | 
  42 |   test('should process order and clear constructor', async ({ page }) => {
  43 |     await page.routeFromHAR('tests/hars/user.har', {
  44 |       url: '*/**/api/auth/user',
  45 |       update: false
  46 |     });
  47 | 
  48 |     await page.routeFromHAR('tests/hars/order.har', {
  49 |       url: '*/**/api/orders',
  50 |       update: false
  51 |     });
  52 | 
  53 |     await page.evaluate(() => {
  54 |       window.localStorage.setItem('accessToken', 'Bearer test-token');
  55 |       document.cookie = 'refreshToken=test-token; path=/';
  56 |     });
  57 | 
  58 |     await page.reload();
  59 | 
  60 |     const bun = page.locator('[data-testid="ingredient-item"]').nth(0);
  61 |     const filling = page.locator('[data-testid="ingredient-item"]').nth(2);
  62 |     const constructorArea = page.locator('[data-testid="constructor-area"]');
  63 | 
  64 |     await bun.dragTo(constructorArea);
  65 |     await filling.dragTo(constructorArea);
  66 | 
  67 |     const orderButton = page.getByRole('button', { name: 'Оформить заказ' });
  68 |     await orderButton.click();
  69 | 
  70 |     const modal = page.locator('[data-testid="modal"]');
  71 |     await expect(modal).toBeVisible();
  72 |     await expect(page.getByText('123456')).toBeVisible();
  73 | 
  74 |     await page.locator('[data-testid="modal"] button').first().click();
  75 |     await expect(modal).toBeHidden();
  76 |     
  77 |     await expect(page.getByText('Филе Люминесцентного тетраодонтимформа')).toBeHidden();
  78 |   });
  79 | });
```