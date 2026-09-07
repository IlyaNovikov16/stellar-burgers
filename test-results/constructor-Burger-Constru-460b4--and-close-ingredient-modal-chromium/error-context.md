# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: constructor.spec.ts >> Burger Constructor >> should open and close ingredient modal
- Location: tests/constructor.spec.ts:20:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-testid="ingredient-item"]').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - banner [ref=e4]:
      - navigation [ref=e5]:
        - generic [ref=e6]:
          - link [ref=e7] [cursor=pointer]:
            - /url: /
            - paragraph [ref=e10]: Конструктор
          - link [ref=e11] [cursor=pointer]:
            - /url: /feed
            - paragraph [ref=e14]: Лента заказов
        - link [ref=e16] [cursor=pointer]:
          - /url: /
        - link [ref=e85] [cursor=pointer]:
          - /url: /profile
          - paragraph [ref=e88]: Личный кабинет
    - main [ref=e89]:
      - heading "Соберите бургер" [level=1] [ref=e90]
      - generic [ref=e91]:
        - generic [ref=e92]:
          - navigation [ref=e93]:
            - list [ref=e94]:
              - generic: Булки
              - generic [ref=e95] [cursor=pointer]: Начинки
              - generic [ref=e96] [cursor=pointer]: Соусы
          - generic [ref=e97]:
            - heading "Булки" [level=3] [ref=e98]
            - list
            - heading "Начинки" [level=3] [ref=e99]
            - list
            - heading "Соусы" [level=3] [ref=e100]
            - list
        - generic [ref=e102]:
          - generic [ref=e103]: Выберите булки
          - list [ref=e104]:
            - generic [ref=e105]: Выберите начинку
          - generic [ref=e106]: Выберите булки
          - generic [ref=e107]:
            - paragraph [ref=e109]: "0"
            - button "Оформить заказ" [ref=e116] [cursor=pointer]
  - iframe [ref=e117]:
    - generic [ref=f1e2]:
      - generic [ref=f1e3]: "Compiled with problems:"
      - button "Dismiss" [ref=f1e4] [cursor=pointer]: ×
      - generic [ref=f1e6]:
        - generic [ref=f1e7]: WARNING
        - generic [ref=f1e8]:
          - text: "[eslint]"
          - generic [ref=f1e9]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/burger-constructor/burger-constructor.tsx
          - generic [ref=f1e10]: "55:22 warning Replace `\"constructor-area\"` with `'constructor-area'` prettier/prettier"
          - generic [ref=f1e11]: 55:22 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f1e12]: "66:3 warning Insert `⏎` prettier/prettier"
          - generic [ref=f1e13]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/burger-ingredient/burger-ingredient.tsx
          - generic [ref=f1e14]: "23:24 warning Replace `\"ingredient-item\"` with `'ingredient-item'` prettier/prettier"
          - generic [ref=f1e15]: 23:24 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f1e16]: "33:3 warning Insert `⏎` prettier/prettier"
          - generic [ref=f1e17]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/modal/modal.tsx
          - generic [ref=f1e18]: "22:22 warning Replace `\"modal\"` with `'modal'` prettier/prettier"
          - generic [ref=f1e19]: 22:22 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f1e20]: "29:4 warning Insert `⏎` prettier/prettier"
          - generic [ref=f1e21]: /Users/ilanovikov/Desktop/stellar-burgers/src/services/slices/constructorSlice.ts
          - generic [ref=f1e22]: "60:41 warning Insert `⏎` prettier/prettier"
          - generic [ref=f1e23]: /Users/ilanovikov/Desktop/stellar-burgers/src/services/slices/ingredientsSlice.ts
          - generic [ref=f1e24]: "43:41 warning Insert `⏎` prettier/prettier"
          - generic [ref=f1e25]: ✖ 11 problems (0 errors, 11 warnings)
          - generic [ref=f1e27]: "0 errors and 11 warnings potentially fixable with the `--fix` option."
  - iframe [ref=e118]:
    - generic [ref=f2e2]:
      - generic [ref=f2e3]: "Compiled with problems:"
      - button "Dismiss" [ref=f2e4] [cursor=pointer]: ×
      - generic [ref=f2e6]:
        - generic [ref=f2e7]: WARNING
        - generic [ref=f2e8]:
          - text: "[eslint]"
          - generic [ref=f2e9]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/burger-constructor/burger-constructor.tsx
          - generic [ref=f2e10]: "55:22 warning Replace `\"constructor-area\"` with `'constructor-area'` prettier/prettier"
          - generic [ref=f2e11]: 55:22 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f2e12]: "66:3 warning Insert `⏎` prettier/prettier"
          - generic [ref=f2e13]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/burger-ingredient/burger-ingredient.tsx
          - generic [ref=f2e14]: "23:24 warning Replace `\"ingredient-item\"` with `'ingredient-item'` prettier/prettier"
          - generic [ref=f2e15]: 23:24 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f2e16]: "33:3 warning Insert `⏎` prettier/prettier"
          - generic [ref=f2e17]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/modal/modal.tsx
          - generic [ref=f2e18]: "22:22 warning Replace `\"modal\"` with `'modal'` prettier/prettier"
          - generic [ref=f2e19]: 22:22 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f2e20]: "29:4 warning Insert `⏎` prettier/prettier"
          - generic [ref=f2e21]: /Users/ilanovikov/Desktop/stellar-burgers/src/services/slices/constructorSlice.ts
          - generic [ref=f2e22]: "60:41 warning Insert `⏎` prettier/prettier"
          - generic [ref=f2e23]: /Users/ilanovikov/Desktop/stellar-burgers/src/services/slices/ingredientsSlice.ts
          - generic [ref=f2e24]: "43:41 warning Insert `⏎` prettier/prettier"
          - generic [ref=f2e25]: ✖ 11 problems (0 errors, 11 warnings)
          - generic [ref=f2e27]: "0 errors and 11 warnings potentially fixable with the `--fix` option."
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
  9  |     await page.goto('/');
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
> 22 |     await ingredient.click();
     |                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
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