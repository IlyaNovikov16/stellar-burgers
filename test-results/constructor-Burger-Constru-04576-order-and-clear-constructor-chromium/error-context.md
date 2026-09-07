# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: constructor.spec.ts >> Burger Constructor >> should process order and clear constructor
- Location: tests/constructor.spec.ts:42:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.dragTo: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-testid="ingredient-item"]').first()

```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - generic [ref=f3e3]:
    - banner [ref=f3e4]:
      - navigation [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: /
            - paragraph [ref=f3e10]: Конструктор
          - link [ref=f3e11] [cursor=pointer]:
            - /url: /feed
            - paragraph [ref=f3e14]: Лента заказов
        - link [ref=f3e16] [cursor=pointer]:
          - /url: /
        - link [ref=f3e85] [cursor=pointer]:
          - /url: /profile
          - paragraph [ref=f3e88]: Личный кабинет
    - main [ref=f3e89]:
      - heading "Соберите бургер" [level=1] [ref=f3e90]
      - generic [ref=f3e91]:
        - generic [ref=f3e92]:
          - navigation [ref=f3e93]:
            - list [ref=f3e94]:
              - generic: Булки
              - generic [ref=f3e95] [cursor=pointer]: Начинки
              - generic [ref=f3e96] [cursor=pointer]: Соусы
          - generic [ref=f3e97]:
            - heading "Булки" [level=3] [ref=f3e98]
            - list
            - heading "Начинки" [level=3] [ref=f3e99]
            - list
            - heading "Соусы" [level=3] [ref=f3e100]
            - list
        - generic [ref=f3e102]:
          - generic [ref=f3e103]: Выберите булки
          - list [ref=f3e104]:
            - generic [ref=f3e105]: Выберите начинку
          - generic [ref=f3e106]: Выберите булки
          - generic [ref=f3e107]:
            - paragraph [ref=f3e109]: "0"
            - button "Оформить заказ" [ref=f3e116] [cursor=pointer]
  - iframe [ref=f3e117]:
    - generic [ref=f4e2]:
      - generic [ref=f4e3]: "Compiled with problems:"
      - button "Dismiss" [ref=f4e4] [cursor=pointer]: ×
      - generic [ref=f4e6]:
        - generic [ref=f4e7]: WARNING
        - generic [ref=f4e8]:
          - text: "[eslint]"
          - generic [ref=f4e9]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/burger-constructor/burger-constructor.tsx
          - generic [ref=f4e10]: "55:22 warning Replace `\"constructor-area\"` with `'constructor-area'` prettier/prettier"
          - generic [ref=f4e11]: 55:22 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f4e12]: "66:3 warning Insert `⏎` prettier/prettier"
          - generic [ref=f4e13]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/burger-ingredient/burger-ingredient.tsx
          - generic [ref=f4e14]: "23:24 warning Replace `\"ingredient-item\"` with `'ingredient-item'` prettier/prettier"
          - generic [ref=f4e15]: 23:24 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f4e16]: "33:3 warning Insert `⏎` prettier/prettier"
          - generic [ref=f4e17]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/modal/modal.tsx
          - generic [ref=f4e18]: "22:22 warning Replace `\"modal\"` with `'modal'` prettier/prettier"
          - generic [ref=f4e19]: 22:22 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f4e20]: "29:4 warning Insert `⏎` prettier/prettier"
          - generic [ref=f4e21]: /Users/ilanovikov/Desktop/stellar-burgers/src/services/slices/constructorSlice.ts
          - generic [ref=f4e22]: "60:41 warning Insert `⏎` prettier/prettier"
          - generic [ref=f4e23]: /Users/ilanovikov/Desktop/stellar-burgers/src/services/slices/ingredientsSlice.ts
          - generic [ref=f4e24]: "43:41 warning Insert `⏎` prettier/prettier"
          - generic [ref=f4e25]: ✖ 11 problems (0 errors, 11 warnings)
          - generic [ref=f4e27]: "0 errors and 11 warnings potentially fixable with the `--fix` option."
  - iframe [ref=f3e118]:
    - generic [ref=f5e2]:
      - generic [ref=f5e3]: "Compiled with problems:"
      - button "Dismiss" [ref=f5e4] [cursor=pointer]: ×
      - generic [ref=f5e6]:
        - generic [ref=f5e7]: WARNING
        - generic [ref=f5e8]:
          - text: "[eslint]"
          - generic [ref=f5e9]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/burger-constructor/burger-constructor.tsx
          - generic [ref=f5e10]: "55:22 warning Replace `\"constructor-area\"` with `'constructor-area'` prettier/prettier"
          - generic [ref=f5e11]: 55:22 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f5e12]: "66:3 warning Insert `⏎` prettier/prettier"
          - generic [ref=f5e13]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/burger-ingredient/burger-ingredient.tsx
          - generic [ref=f5e14]: "23:24 warning Replace `\"ingredient-item\"` with `'ingredient-item'` prettier/prettier"
          - generic [ref=f5e15]: 23:24 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f5e16]: "33:3 warning Insert `⏎` prettier/prettier"
          - generic [ref=f5e17]: /Users/ilanovikov/Desktop/stellar-burgers/src/components/modal/modal.tsx
          - generic [ref=f5e18]: "22:22 warning Replace `\"modal\"` with `'modal'` prettier/prettier"
          - generic [ref=f5e19]: 22:22 warning Unexpected usage of doublequote jsx-quotes
          - generic [ref=f5e20]: "29:4 warning Insert `⏎` prettier/prettier"
          - generic [ref=f5e21]: /Users/ilanovikov/Desktop/stellar-burgers/src/services/slices/constructorSlice.ts
          - generic [ref=f5e22]: "60:41 warning Insert `⏎` prettier/prettier"
          - generic [ref=f5e23]: /Users/ilanovikov/Desktop/stellar-burgers/src/services/slices/ingredientsSlice.ts
          - generic [ref=f5e24]: "43:41 warning Insert `⏎` prettier/prettier"
          - generic [ref=f5e25]: ✖ 11 problems (0 errors, 11 warnings)
          - generic [ref=f5e27]: "0 errors and 11 warnings potentially fixable with the `--fix` option."
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
> 64 |     await bun.dragTo(constructorArea);
     |               ^ Error: locator.dragTo: Test timeout of 30000ms exceeded.
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