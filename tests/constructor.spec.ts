import { test, expect } from '@playwright/test';

test.describe('Burger Constructor', () => {
  test.beforeEach(async ({ page }) => {
    await page.routeFromHAR('tests/hars/ingredients.har', {
      url: /api\/ingredients/,
      update: false
    });
    await page.goto('/');
  });

  test('should add ingredient to constructor', async ({ page }) => {
    const bun = page.locator('[data-testid="ingredient-item"]').first();
    const constructorArea = page.locator('[data-testid="constructor-area"]');
    
    await bun.dragTo(constructorArea);
    await expect(page.getByText('Краторная булка N-200i').nth(1)).toBeVisible();
  });

  test('should open and close ingredient modal', async ({ page }) => {
    const ingredient = page.locator('[data-testid="ingredient-item"]').first();
    await ingredient.click();

    const modal = page.locator('[data-testid="modal"]');
    await expect(modal).toBeVisible();
    await expect(page.getByText('Детали ингредиента')).toBeVisible();

    const closeButton = page.locator('[data-testid="modal"] button').first();
    await closeButton.click();
    await expect(modal).toBeHidden();
  });

  test('should close modal by overlay click', async ({ page }) => {
    const ingredient = page.locator('[data-testid="ingredient-item"]').first();
    await ingredient.click();
    await expect(page.locator('[data-testid="modal"]')).toBeVisible();

    await page.mouse.click(10, 10);
    await expect(page.locator('[data-testid="modal"]')).toBeHidden();
  });

  test('should process order and clear constructor', async ({ page }) => {
    await page.routeFromHAR('tests/hars/user.har', {
      url: /api\/auth\/user/,
      update: false
    });

    await page.routeFromHAR('tests/hars/order.har', {
      url: /api\/orders/,
      update: false
    });

    await page.evaluate(() => {
      window.localStorage.setItem('accessToken', 'Bearer test-token');
      document.cookie = 'refreshToken=test-token; path=/';
    });

    await page.reload();

    const bun = page.locator('[data-testid="ingredient-item"]').nth(0);
    const filling = page.locator('[data-testid="ingredient-item"]').nth(2);
    const constructorArea = page.locator('[data-testid="constructor-area"]');

    await bun.dragTo(constructorArea);
    await filling.dragTo(constructorArea);

    const orderButton = page.getByRole('button', { name: 'Оформить заказ' });
    await orderButton.click();

    const modal = page.locator('[data-testid="modal"]');
    await expect(modal).toBeVisible();
    await expect(page.getByText('123456')).toBeVisible();

    await page.locator('[data-testid="modal"] button').first().click();
    await expect(modal).toBeHidden();
    
    await expect(page.getByText('Филе Люминесцентного тетраодонтимформа')).toBeHidden();
  });
});