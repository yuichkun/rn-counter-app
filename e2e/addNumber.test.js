import { driver, config } from './setup';

beforeAll(async () => {
  config.noReset = true;
  await driver.init(config);
  await driver.sleep(1000);
});

describe('Login correctly', () => {
  test('from tutorial to login screen renders correctly', async () => {
    expect(await driver.hasElementByAccessibilityId('home')).toBe(true);
  });
})

describe('Add Number Button', () => {
  test('from tutorial to login screen renders correctly', async () => {
    const addButton = await driver.elementByAccessibilityId('addButton');
    for (let i = 0; i < 5; i++){
      await driver.tapElement(addButton);
    }
    const countElem = await driver.elementByAccessibilityId("count");
    const count = await countElem.text();
    expect(count).toBe("5");
  });
});